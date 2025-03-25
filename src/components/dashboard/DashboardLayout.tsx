
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { Button } from '@/components/ui/button';
import { Menu, BellIcon, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Open sidebar"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <h1 className="ml-3 md:ml-0 text-xl font-semibold text-oraxyn-gray">
                Dashboard
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" />
              </button>
              
              {/* Profile dropdown */}
              <div className="relative">
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-700 hidden md:block">
                    {user?.firstName} {user?.lastName}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-100"
                    onClick={logout}
                  >
                    <User className="h-5 w-5 text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
