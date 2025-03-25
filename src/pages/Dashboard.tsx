
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { AmazonDashboard } from '@/components/dashboard/AmazonDashboard';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const { isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState('amazon');
  
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oraxyn-blue"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-start mb-4 text-red-600">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
            <div>
              <h3 className="font-medium">Authentication Error</h3>
              <p className="text-sm text-gray-600 mt-1">
                You need to be logged in to access the dashboard.
              </p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/login')}
            className="w-full bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  const renderDashboard = () => {
    switch (selectedPlatform) {
      case 'amazon':
        return <AmazonDashboard user={user} />;
      case 'facebook':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Facebook & Instagram Dashboard</h2>
            <p className="text-gray-500 mb-6">This dashboard is under development.</p>
            <Button onClick={() => setSelectedPlatform('amazon')}>
              Switch to Amazon Dashboard
            </Button>
          </div>
        );
      case 'google':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Google Ads Dashboard</h2>
            <p className="text-gray-500 mb-6">This dashboard is under development.</p>
            <Button onClick={() => setSelectedPlatform('amazon')}>
              Switch to Amazon Dashboard
            </Button>
          </div>
        );
      default:
        return <AmazonDashboard user={user} />;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex overflow-x-auto">
        <div className="flex space-x-2">
          <Button
            variant={selectedPlatform === 'amazon' ? 'default' : 'outline'}
            className={selectedPlatform === 'amazon' ? 'bg-oraxyn-blue hover:bg-oraxyn-darkBlue' : ''}
            onClick={() => setSelectedPlatform('amazon')}
          >
            Amazon
          </Button>
          <Button
            variant={selectedPlatform === 'facebook' ? 'default' : 'outline'}
            className={selectedPlatform === 'facebook' ? 'bg-oraxyn-blue hover:bg-oraxyn-darkBlue' : ''}
            onClick={() => setSelectedPlatform('facebook')}
          >
            Facebook & Instagram
          </Button>
          <Button
            variant={selectedPlatform === 'google' ? 'default' : 'outline'}
            className={selectedPlatform === 'google' ? 'bg-oraxyn-blue hover:bg-oraxyn-darkBlue' : ''}
            onClick={() => setSelectedPlatform('google')}
          >
            Google
          </Button>
        </div>
      </div>
      
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default Dashboard;
