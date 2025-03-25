import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { AlertCircle, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { resetPassword } from '@/api/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    try {
      setIsLoading(true);
      await resetPassword(email);
      setSubmitted(true);
      toast({
        title: 'Password reset email sent',
        description: 'Please check your email for instructions to reset your password.',
      });
    } catch (err: any) {
      console.error('Password reset error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-left mb-6">
            <Link to="/login" className="inline-flex items-center text-primary hover:text-primary/90 transition-colors text-sm font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Link>
          </div>
          
          <div className="w-full max-w-md mx-auto p-6 sm:p-8 glass-panel">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
              <p className="text-gray-600 mt-2">Enter your email to receive a password reset link</p>
            </div>
            
            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            {submitted ? (
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Check your email</h3>
                <p className="text-gray-600">
                  We've sent a password reset link to <span className="font-medium">{email}</span>.
                  Please check your inbox and spam folder.
                </p>
                <p className="pt-4 text-sm text-gray-500">
                  Didn't receive an email?{' '}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:underline font-medium"
                  >
                    Try again
                  </button>
                </p>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    placeholder="your@email.com"
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </Button>
                
                <div className="text-center text-gray-600 text-sm">
                  Remember your password?{' '}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
