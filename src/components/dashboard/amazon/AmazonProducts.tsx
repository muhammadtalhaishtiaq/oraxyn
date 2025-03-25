
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { getProductsForSellerAccount, AmazonProduct, getAmazonSellerAccounts } from '@/api/amazon';
import { AlertCircle, ArrowUpDown, Search, RefreshCw } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export const AmazonProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<AmazonProduct[]>([]);
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'sales', direction: 'desc' });
  
  useEffect(() => {
    const fetchAccounts = async () => {
      if (!user) return;
      
      try {
        const fetchedAccounts = await getAmazonSellerAccounts(user.id);
        setAccounts(fetchedAccounts);
        
        if (fetchedAccounts.length > 0) {
          const defaultAccount = fetchedAccounts.find(acc => acc.isDefault) || fetchedAccounts[0];
          setSelectedAccount(defaultAccount.id);
          fetchProducts(defaultAccount.id);
        }
      } catch (err) {
        console.error('Error fetching accounts:', err);
        setError('Failed to load Amazon accounts');
      }
    };
    
    fetchAccounts();
  }, [user]);
  
  const fetchProducts = async (accountId: string) => {
    try {
      setIsLoading(true);
      setError('');
      const fetchedProducts = await getProductsForSellerAccount(accountId);
      setProducts(fetchedProducts);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleAccountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const accountId = e.target.value;
    setSelectedAccount(accountId);
    fetchProducts(accountId);
  };
  
  const handleRefresh = () => {
    if (selectedAccount) {
      fetchProducts(selectedAccount);
    }
  };
  
  const requestSort = (key: keyof AmazonProduct) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortedProducts = () => {
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.asin.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return [...filtered].sort((a, b) => {
      if (a[sortConfig.key as keyof AmazonProduct] < b[sortConfig.key as keyof AmazonProduct]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key as keyof AmazonProduct] > b[sortConfig.key as keyof AmazonProduct]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };
  
  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Amazon Products</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleRefresh}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
            <CardTitle>Product Performance</CardTitle>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <select
                value={selectedAccount}
                onChange={handleAccountChange}
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading || accounts.length === 0}
              >
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.sellerName} ({account.marketplaceId})
                  </option>
                ))}
              </select>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-50 p-3 rounded-md text-red-700 mb-4 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          
          {isLoading ? (
            <div className="flex justify-center items-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oraxyn-blue"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center p-12 border border-dashed rounded-lg">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">
                {selectedAccount 
                  ? "This account doesn't have any products yet."
                  : "Please select an account to view products."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => requestSort('price')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Price</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => requestSort('adSpend')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Ad Spend</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => requestSort('sales')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Sales</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => requestSort('acos')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>ACOS</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer"
                      onClick={() => requestSort('clicks')}
                    >
                      <div className="flex items-center space-x-1">
                        <span>Clicks</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getSortedProducts().map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="h-10 w-10 rounded-md object-cover"
                          />
                          <div>
                            <div className="font-medium">{product.title}</div>
                            <div className="text-xs text-gray-500">ASIN: {product.asin}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{formatCurrency(product.price)}</TableCell>
                      <TableCell>{formatCurrency(product.adSpend)}</TableCell>
                      <TableCell>{formatCurrency(product.sales)}</TableCell>
                      <TableCell>{formatPercent(product.acos)}</TableCell>
                      <TableCell>{product.clicks.toLocaleString()}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
