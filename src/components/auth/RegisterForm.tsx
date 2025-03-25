
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { AlertCircle, Loader2, Check } from 'lucide-react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'password') {
      // Calculate password strength
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };
  
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    
    // Additional password strength validation
    if (passwordStrength < 3) {
      setError('Please create a stronger password. Include uppercase letters, numbers, and special characters.');
      return false;
    }
    
    return true;
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    try {
      setIsLoading(true);
      await register(formData);
      toast({
        title: 'Registration successful!',
        description: 'Your account is pending approval. We\'ll notify you when it\'s approved.',
      });
      navigate('/login');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || 'Registration failed. Email may already be in use.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 glass-panel">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-oraxyn-gray">Create Your Account</h2>
        <p className="text-gray-600 mt-2">Join Oraxyn and optimize your e-commerce advertising</p>
      </div>
      
      {error && (
        <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleRegister} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full"
              placeholder="John"
              disabled={isLoading}
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full"
              placeholder="Doe"
              disabled={isLoading}
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
            placeholder="your@email.com"
            disabled={isLoading}
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full"
            placeholder="Your company"
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full"
            placeholder="••••••••"
            disabled={isLoading}
            required
          />
          
          {/* Password strength meter */}
          {formData.password && (
            <div className="mt-2">
              <div className="flex h-1 w-full space-x-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-full w-1/4 rounded-sm transition-colors ${
                      passwordStrength >= level
                        ? level <= 1
                          ? 'bg-red-400'
                          : level <= 2
                          ? 'bg-orange-400'
                          : level <= 3
                          ? 'bg-yellow-400'
                          : 'bg-green-400'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between">
                <div className="text-xs text-gray-500">
                  {passwordStrength === 0 && "Weak"}
                  {passwordStrength === 1 && "Fair"}
                  {passwordStrength === 2 && "Good"}
                  {passwordStrength === 3 && "Strong"}
                  {passwordStrength === 4 && "Very strong"}
                </div>
                <div className="text-xs text-gray-500">8+ characters</div>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full"
            placeholder="••••••••"
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-600">
              I agree to the{' '}
              <Link to="/terms" className="text-oraxyn-blue hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-oraxyn-blue hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>
        
        <div className="text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-oraxyn-blue hover:underline font-medium">
            Sign in
          </Link>
        </div>
      </form>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-oraxyn-gray mb-4">
          Creating an account gives you access to:
        </h3>
        <ul className="space-y-2">
          {[
            "AI-powered campaign optimization",
            "Cross-channel advertising management",
            "Product-level performance insights",
            "Unified reporting dashboard"
          ].map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegisterForm;
