
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BarChart3, DollarSign, ShoppingCart, TrendingUp, Users, AlertCircle } from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar,
  Cell,
  Legend,
  PieChart,
  Pie
} from 'recharts';
import { AmazonAccounts } from './amazon/AmazonAccounts';
import { AmazonProducts } from './amazon/AmazonProducts';
import { AmazonReports } from './amazon/AmazonReports';
import { AmazonAccountConnect } from './amazon/AmazonAccountConnect';
import { AmazonAdScheduler } from './amazon/AmazonAdScheduler';
import { KeywordOptimizer } from './amazon/KeywordOptimizer';
import { Button } from '@/components/ui/button';

interface AmazonDashboardProps {
  user: any;
}

export const AmazonDashboard = ({ user }: AmazonDashboardProps) => {
  const [isDataDiscrepancy, setIsDataDiscrepancy] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState('amazon');
  
  // Sample data for charts
  const performanceData = [
    { name: 'Jan', sales: 4000, spend: 2400, impressions: 2400, clicks: 1200 },
    { name: 'Feb', sales: 3000, spend: 1398, impressions: 2210, clicks: 989 },
    { name: 'Mar', sales: 2000, spend: 9800, impressions: 2290, clicks: 1300 },
    { name: 'Apr', sales: 2780, spend: 3908, impressions: 2000, clicks: 1108 },
    { name: 'May', sales: 1890, spend: 4800, impressions: 2181, clicks: 1200 },
    { name: 'Jun', sales: 2390, spend: 3800, impressions: 2500, clicks: 1400 },
    { name: 'Jul', sales: 3490, spend: 4300, impressions: 2100, clicks: 1200 },
  ];
  
  const campaignData = [
    { name: 'Sponsored Products', spend: 4000, sales: 9800, acos: 40.8 },
    { name: 'Sponsored Brands', spend: 3000, sales: 5200, acos: 57.7 },
    { name: 'Sponsored Display', spend: 2000, sales: 4800, acos: 41.7 },
    { name: 'Video Ads', spend: 1000, sales: 3200, acos: 31.3 },
  ];
  
  const productData = [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 300 },
    { name: 'Product D', value: 200 },
    { name: 'Others', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9747FF'];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">Welcome back, {user.firstName} {user.lastName}</h1>
        <p className="text-gray-500">
          {user.company ? user.company : 'Your Amazon advertising dashboard'}
        </p>
      </div>
      
      {isDataDiscrepancy && (
        <Alert className="bg-amber-50 border-amber-200 mb-6">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-600 font-medium">Alert: Amazon Reports may show data discrepancies</AlertTitle>
          <AlertDescription className="text-amber-600">
            Reports may show data discrepancies starting from February 26 due to data transmission issues from Amazon.
          </AlertDescription>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2 border-amber-200 text-amber-600 hover:bg-amber-100 hover:text-amber-700"
            onClick={() => setIsDataDiscrepancy(false)}
          >
            Dismiss
          </Button>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Sales</p>
                <p className="text-2xl font-bold text-oraxyn-gray">$24,780</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12.5% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-oraxyn-blue/10 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-oraxyn-blue" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Ad Spend</p>
                <p className="text-2xl font-bold text-oraxyn-gray">$8,245</p>
                <p className="text-sm text-amber-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +5.2% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-oraxyn-orange/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-oraxyn-orange" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">ACOS</p>
                <p className="text-2xl font-bold text-oraxyn-gray">33.2%</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  -2.4% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-oraxyn-purple/10 rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-oraxyn-purple" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold text-oraxyn-gray">12.8%</p>
                <p className="text-sm text-green-600 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +1.8% from last month
                </p>
              </div>
              <div className="h-12 w-12 bg-oraxyn-green/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-oraxyn-green" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="connect">Connect Account</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="scheduler">Ad Scheduler</TabsTrigger>
          <TabsTrigger value="keywords">Keyword Optimizer</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Amazon Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="sales" 
                      stackId="1"
                      stroke="#8884d8" 
                      fill="#8884d8" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="spend" 
                      stackId="2"
                      stroke="#82ca9d" 
                      fill="#82ca9d" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="impressions" 
                      stackId="3"
                      stroke="#ffc658" 
                      fill="#ffc658" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="clicks" 
                      stackId="4"
                      stroke="#ff7300" 
                      fill="#ff7300" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={campaignData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="spend" fill="#8884d8" />
                          <Bar dataKey="sales" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Top Products by Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={productData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {productData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accounts">
          <AmazonAccounts />
        </TabsContent>
        
        <TabsContent value="connect">
          <AmazonAccountConnect />
        </TabsContent>
        
        <TabsContent value="products">
          <AmazonProducts />
        </TabsContent>
        
        <TabsContent value="scheduler">
          <AmazonAdScheduler />
        </TabsContent>
        
        <TabsContent value="keywords">
          <KeywordOptimizer />
        </TabsContent>
        
        <TabsContent value="reports">
          <AmazonReports />
        </TabsContent>
      </Tabs>
    </div>
  );
};
