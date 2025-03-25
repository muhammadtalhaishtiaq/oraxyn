import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';
import { loginUser, registerUser, getUserById, logoutUser } from '@/api/auth';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  role?: string;
  accountStatus?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  supabaseUser: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  loading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [supabaseUser, setSupabaseUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        console.log('Auth state changed:', event);
        setSession(newSession);
        
        if (newSession) {
          setSupabaseUser(newSession.user);
          
          // Get full user profile
          try {
            const userProfile = await getUserById(newSession.user.id);
            setUser(userProfile);
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        } else {
          setSupabaseUser(null);
          setUser(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session: existingSession } }) => {
      setSession(existingSession);
      
      if (existingSession) {
        setSupabaseUser(existingSession.user);
        
        try {
          const userProfile = await getUserById(existingSession.user.id);
          setUser(userProfile);
        } catch (error) {
          console.error('Error fetching initial user profile:', error);
        }
      }
      
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await loginUser(email, password);
      toast({
        title: 'Login successful',
        description: 'You have been successfully logged in.'
      });
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Special handling for email confirmation errors - attempt direct login since we've disabled confirmations
      if (error.message?.includes('not confirmed') || error?.code === 'email_not_confirmed') {
        try {
          const { data, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
          });
          
          if (signInError) throw signInError;
          
          toast({
            title: 'Login successful',
            description: 'You have been successfully logged in.'
          });
          return;
        } catch (retryError) {
          console.error('Retry login error:', retryError);
          toast({
            title: 'Login failed',
            description: 'Invalid email or password.',
            variant: 'destructive'
          });
          throw retryError;
        }
      }
      
      // Handle specific error for pending approval
      if (error.message?.includes('pending approval')) {
        toast({
          title: 'Login failed',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Login failed',
          description: error.message || 'Invalid email or password.',
          variant: 'destructive'
        });
      }
      
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const register = async (userData: any) => {
    try {
      setLoading(true);
      await registerUser(userData);
      toast({
        title: 'Registration successful',
        description: 'Your account has been created and is pending approval.'
      });
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: 'Registration failed',
        description: error.message || 'Registration failed. Please try again.',
        variant: 'destructive'
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = async () => {
    try {
      setLoading(true);
      await logoutUser();
      setUser(null);
      setSupabaseUser(null);
      setSession(null);
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.'
      });
    } catch (error: any) {
      console.error('Logout error:', error);
      toast({
        title: 'Logout failed',
        description: error.message || 'Logout failed. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  // Determine if the user is an admin
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        supabaseUser,
        session,
        isAuthenticated: !!user && !!supabaseUser,
        loading,
        isAdmin,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
