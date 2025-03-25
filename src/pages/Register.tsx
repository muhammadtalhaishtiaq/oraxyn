
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import RegisterForm from '@/components/auth/RegisterForm';
import { ArrowLeft } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl">
          <div className="text-left mb-6">
            <Link to="/" className="inline-flex items-center text-oraxyn-blue hover:text-oraxyn-darkBlue transition-colors text-sm font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </div>
          
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
