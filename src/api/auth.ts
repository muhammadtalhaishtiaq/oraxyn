
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import * as bcrypt from 'bcryptjs';

// Register a new user
export const registerUser = async (userData: any) => {
  const { firstName, lastName, email, password, company } = userData;
  
  try {
    // Create user in Supabase Auth
    const passwordHash = await bcrypt.hash(password, 10);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          password_hash: passwordHash,
          company
        },
        emailRedirectTo: `${window.location.origin}/login`
      }
    });
    
    if (error) throw error;
    
    console.log('User registration successful:', data);
    
    // Create profile record directly instead of relying on the trigger
    if (data.user) {
      // First create the profile if it doesn't exist
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({ 
          id: data.user.id,
          first_name: firstName,
          last_name: lastName,
          email: email,
          company: company,
          account_status: 'pending',
          password_hash: passwordHash,
          role: 'user'
        });
      
      if (profileError) {
        console.error('Error creating profile:', profileError);
        throw profileError;
      }

      // Then create approval request
      try {
        const { error: approvalError } = await supabase
          .from('approval_requests')
          .insert({ 
            user_id: data.user.id,
            status: 'pending'
          });
        
        if (approvalError) {
          console.error('Error creating approval request:', approvalError);
        }
      } catch (approvalErr) {
        console.error('Exception creating approval request:', approvalErr);
      }
    }
    
    // Return the user data
    return {
      id: data.user?.id,
      firstName,
      lastName,
      email,
      company,
      accountStatus: 'pending',
      password_hash: passwordHash
    };
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Login user
export const loginUser = async (email: string, password: string) => {
  try {
    // Sign in with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    
    // Get user's profile with account status
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();
    
    if (profileError) {
      // Handle profile retrieval error
      throw profileError;
    }
    
    // Check if account is approved
    if (profileData.account_status !== 'approved') {
      throw new Error('Your account is pending approval. Please wait for an administrator to approve your account.');
    }
    
    // Return user with profile data
    return {
      id: data.user.id,
      firstName: profileData.first_name,
      lastName: profileData.last_name,
      email: data.user.email,
      company: profileData.company,
      role: profileData.role,
      accountStatus: profileData.account_status
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Get user by ID with profile data
export const getUserById = async (id: string) => {
  // Get user's profile
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) return null;
  
  return {
    id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    company: data.company,
    role: data.role,
    accountStatus: data.account_status
  };
};

// Get all users (admin only)
export const getAllUsers = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  
  return data.map(profile => ({
    id: profile.id,
    firstName: profile.first_name,
    lastName: profile.last_name,
    email: profile.email,
    company: profile.company,
    role: profile.role,
    accountStatus: profile.account_status,
    createdAt: profile.created_at
  }));
};

// Get pending approval requests
export const getPendingApprovals = async () => {
  const { data, error } = await supabase
    .from('approval_requests')
    .select(`
      id,
      user_id,
      requested_at,
      status,
      profiles:user_id (
        first_name,
        last_name,
        email,
        company
      )
    `)
    .eq('status', 'pending')
    .order('requested_at', { ascending: false });
  
  if (error) throw error;
  
  return data;
};

// Approve or decline a user account
export const processApproval = async (requestId: string, userId: string, approved: boolean, notes?: string) => {
  const status = approved ? 'approved' : 'declined';
  
  try {
    // Get current user ID
    const { data: { user } } = await supabase.auth.getUser();
    
    // Update approval request
    const { error: approvalError } = await supabase
      .from('approval_requests')
      .update({ 
        status,
        processed_at: new Date().toISOString(),
        processed_by: user?.id,
        admin_notes: notes
      })
      .eq('id', requestId);
    
    if (approvalError) throw approvalError;
    
    // Update user profile status
    const { error: profileError } = await supabase
      .from('profiles')
      .update({ account_status: status })
      .eq('id', userId);
    
    if (profileError) throw profileError;
    
    return { success: true };
  } catch (error) {
    console.error('Error processing approval:', error);
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  
  return { success: true };
};

// Reset password
export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  
  if (error) throw error;
  
  return { success: true };
};

// Update password
export const updatePassword = async (userId: string, newPassword: string) => {
  try {  
    // Update password in auth system
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
    
    // Generate new password hash
    const passwordHash = await bcrypt.hash(newPassword, 10);
    
    // Update password hash in profiles table
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ password_hash: passwordHash })
      .eq('id', userId);
      
    if (updateError) {
      console.error('Error updating password hash:', updateError);
      // Continue anyway as the auth system will handle the primary authentication
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
};
