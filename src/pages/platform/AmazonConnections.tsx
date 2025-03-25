
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AmazonAccounts } from '@/components/dashboard/amazon/AmazonAccounts';

const AmazonConnections = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">Amazon Connections</h1>
          <p className="text-gray-500">
            Manage your Amazon seller and vendor accounts
          </p>
        </div>
        
        <AmazonAccounts />
      </div>
    </DashboardLayout>
  );
};

export default AmazonConnections;
