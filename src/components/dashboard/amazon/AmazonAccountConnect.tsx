
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { connectAmazonSellerAccount } from '@/api/amazon';
import { toast } from '@/hooks/use-toast';

export const AmazonAccountConnect = ({ onAccountConnected }: { onAccountConnected?: () => void }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    sellerId: '',
    displayName: '',
    marketplace: 'US'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.sellerId || !formData.displayName) {
      setError('Please fill all required fields');
      return;
    }
    
    try {
      setIsLoading(true);
      
      if (!user) {
        throw new Error('You must be logged in to connect an account');
      }
      
      await connectAmazonSellerAccount(user.id, {
        sellerId: formData.sellerId,
        marketplaceId: formData.marketplace,
        sellerName: formData.displayName
      });
      
      toast({
        title: 'Account connected',
        description: 'Your Amazon seller account has been connected successfully.',
      });
      
      // Reset form
      setFormData({
        sellerId: '',
        displayName: '',
        marketplace: 'US'
      });
      
      // Notify parent component
      if (onAccountConnected) {
        onAccountConnected();
      }
      
    } catch (err) {
      console.error('Error connecting account:', err);
      setError(err instanceof Error ? err.message : 'Failed to connect account');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Connect Amazon Seller Account</CardTitle>
        <CardDescription>
          Link your Amazon seller account to start optimizing your advertising
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>How to get the Amazon Seller ID</AlertTitle>
              <AlertDescription className="mt-2">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Log into Amazon Seller Central</li>
                  <li>Navigate to "Settings" &gt; "Account Info" &gt; "Merchant token"</li>
                  <li>Copy the Merchant Token and paste it below</li>
                </ol>
              </AlertDescription>
            </Alert>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sellerId">Seller ID <span className="text-red-500">*</span></Label>
              <Input
                id="sellerId"
                name="sellerId"
                value={formData.sellerId}
                onChange={handleChange}
                placeholder="e.g. A36D3MOFSGWYZR"
                disabled={isLoading}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name <span className="text-red-500">*</span></Label>
              <Input
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="e.g. My Amazon Store"
                disabled={isLoading}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="marketplace">Marketplace <span className="text-red-500">*</span></Label>
              <select
                id="marketplace"
                name="marketplace"
                value={formData.marketplace}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
                required
              >
                <option value="US">United States (US)</option>
                <option value="CA">Canada (CA)</option>
                <option value="MX">Mexico (MX)</option>
                <option value="UK">United Kingdom (UK)</option>
                <option value="DE">Germany (DE)</option>
                <option value="FR">France (FR)</option>
                <option value="IT">Italy (IT)</option>
                <option value="ES">Spain (ES)</option>
                <option value="JP">Japan (JP)</option>
                <option value="AU">Australia (AU)</option>
              </select>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
              disabled={isLoading}
            >
              {isLoading ? 'Connecting...' : 'Connect Account'}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
