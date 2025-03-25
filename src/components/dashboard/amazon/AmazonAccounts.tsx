
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, Plus, RefreshCw } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { AmazonSellerAccount, getAmazonSellerAccounts } from '@/api/amazon';
import { AmazonAccountConnect } from './AmazonAccountConnect';

export const AmazonAccounts = () => {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<AmazonSellerAccount[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showConnectForm, setShowConnectForm] = useState(false);
  
  const fetchAccounts = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      setError('');
      const fetchedAccounts = await getAmazonSellerAccounts(user.id);
      setAccounts(fetchedAccounts);
    } catch (err) {
      console.error('Error fetching accounts:', err);
      setError('Failed to load Amazon accounts');
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchAccounts();
  }, [user]);
  
  const handleAccountConnected = () => {
    setShowConnectForm(false);
    fetchAccounts();
  };
  
  if (showConnectForm) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Connect Amazon Account</h2>
          <Button 
            variant="outline"
            onClick={() => setShowConnectForm(false)}
          >
            Back to Accounts
          </Button>
        </div>
        <AmazonAccountConnect onAccountConnected={handleAccountConnected} />
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Amazon Seller Accounts</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={fetchAccounts}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Button 
            onClick={() => setShowConnectForm(true)}
            className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
          >
            <Plus className="h-4 w-4 mr-2" />
            Connect Account
          </Button>
        </div>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {accounts.length === 0 ? (
        <div className="text-center p-12 border border-dashed rounded-lg">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No Amazon accounts connected</h3>
          <p className="text-gray-500 mb-4">Connect your Amazon seller account to start optimizing your advertising</p>
          <Button 
            onClick={() => setShowConnectForm(true)}
            className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
          >
            Connect Your First Account
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map(account => (
            <Card key={account.id}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="Amazon" className="w-6 h-6 mr-2" />
                  {account.sellerName}
                  {account.isDefault && (
                    <span className="ml-2 text-xs bg-oraxyn-blue/10 text-oraxyn-blue py-1 px-2 rounded-full">
                      Default
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Marketplace:</span>
                    <span className="font-medium">{account.marketplaceId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Seller ID:</span>
                    <span className="font-medium">{account.sellerId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <span className={`font-medium ${
                      account.connectionStatus === 'connected' ? 'text-green-600' : 
                      account.connectionStatus === 'pending' ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {account.connectionStatus.charAt(0).toUpperCase() + account.connectionStatus.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Products:</span>
                    <span className="font-medium">{account.products.length}</span>
                  </div>
                  <div className="pt-4 flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
