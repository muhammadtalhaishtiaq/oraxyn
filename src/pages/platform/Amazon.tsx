
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, DollarSign, ShoppingCart, TrendingUp, Users } from 'lucide-react';
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

const Amazon = () => {
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
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">Amazon Advertising</h1>
        <p className="text-gray-500">
          Optimize your Amazon campaigns with AI-powered insights
        </p>
      </div>
      
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
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
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
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campaigns">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <CardTitle>ACOS by Campaign Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex justify-center items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={campaignData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="acos" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="products">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            
            <Card>
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Product A', sales: '$5,842', acos: '28.3%', trend: '+12%' },
                    { name: 'Product B', sales: '$4,295', acos: '32.1%', trend: '+8%' },
                    { name: 'Product C', sales: '$3,983', acos: '35.6%', trend: '-2%' },
                    { name: 'Product D', sales: '$2,651', acos: '40.2%', trend: '+5%' },
                    { name: 'Product E', sales: '$2,129', acos: '45.7%', trend: '-3%' },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-gray-600">{product.sales}</div>
                      <div className="text-gray-600">{product.acos}</div>
                      <div className={product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {product.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Keyword
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Impressions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Clicks
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        CTR
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Spend
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sales
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ACOS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { keyword: 'best product', impressions: '12,843', clicks: '642', ctr: '5.0%', spend: '$320', sales: '$1,280', acos: '25.0%' },
                      { keyword: 'premium quality', impressions: '8,521', clicks: '512', ctr: '6.0%', spend: '$256', sales: '$768', acos: '33.3%' },
                      { keyword: 'affordable solution', impressions: '7,632', clicks: '382', ctr: '5.0%', spend: '$191', sales: '$764', acos: '25.0%' },
                      { keyword: 'fast delivery', impressions: '5,842', clicks: '292', ctr: '5.0%', spend: '$146', sales: '$584', acos: '25.0%' },
                      { keyword: 'high performance', impressions: '4,392', clicks: '220', ctr: '5.0%', spend: '$110', sales: '$440', acos: '25.0%' },
                      { keyword: 'top rated', impressions: '3,921', clicks: '196', ctr: '5.0%', spend: '$98', sales: '$392', acos: '25.0%' },
                      { keyword: 'best value', impressions: '2,873', clicks: '144', ctr: '5.0%', spend: '$72', sales: '$288', acos: '25.0%' },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {row.keyword}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.impressions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.clicks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.ctr}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.spend}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.sales}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {row.acos}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Amazon;
