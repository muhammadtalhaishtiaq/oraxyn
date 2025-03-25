
import { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  Area,
  AreaChart,
  BarChart,
  Bar
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

// Mock data
const dailyData = [
  { name: 'Mar 1', amazon: 4000, facebook: 2400, google: 1800, total: 8200 },
  { name: 'Mar 2', amazon: 3000, facebook: 1398, google: 2800, total: 7198 },
  { name: 'Mar 3', amazon: 2000, facebook: 9800, google: 3800, total: 15600 },
  { name: 'Mar 4', amazon: 2780, facebook: 3908, google: 5000, total: 11688 },
  { name: 'Mar 5', amazon: 1890, facebook: 4800, google: 4300, total: 10990 },
  { name: 'Mar 6', amazon: 2390, facebook: 3800, google: 2500, total: 8690 },
  { name: 'Mar 7', amazon: 3490, facebook: 4300, google: 3100, total: 10890 },
  { name: 'Mar 8', amazon: 3490, facebook: 4300, google: 3100, total: 10890 },
  { name: 'Mar 9', amazon: 3490, facebook: 4300, google: 3100, total: 10890 },
  { name: 'Mar 10', amazon: 4490, facebook: 5300, google: 3800, total: 13590 },
  { name: 'Mar 11', amazon: 5890, facebook: 4800, google: 3500, total: 14190 },
  { name: 'Mar 12', amazon: 6390, facebook: 5800, google: 4500, total: 16690 },
  { name: 'Mar 13', amazon: 5390, facebook: 4800, google: 3500, total: 13690 },
  { name: 'Mar 14', amazon: 4490, facebook: 3800, google: 2500, total: 10790 },
];

const weeklyData = [
  { name: 'Week 1', amazon: 28000, facebook: 18000, google: 14000, total: 60000 },
  { name: 'Week 2', amazon: 32000, facebook: 21000, google: 16000, total: 69000 },
  { name: 'Week 3', amazon: 35000, facebook: 24000, google: 19000, total: 78000 },
  { name: 'Week 4', amazon: 38000, facebook: 26000, google: 22000, total: 86000 },
];

const monthlyData = [
  { name: 'Jan', amazon: 125000, facebook: 85000, google: 65000, total: 275000 },
  { name: 'Feb', amazon: 145000, facebook: 90000, google: 70000, total: 305000 },
  { name: 'Mar', amazon: 158000, facebook: 98000, google: 75000, total: 331000 },
];

const campaignData = [
  { name: 'Best Sellers', impressions: 4500000, clicks: 137000, spend: 45600, sales: 152000, roas: 3.33 },
  { name: 'New Products', impressions: 2200000, clicks: 98000, spend: 31200, sales: 89600, roas: 2.87 },
  { name: 'Holiday Promo', impressions: 3800000, clicks: 125000, spend: 41500, sales: 132800, roas: 3.2 },
  { name: 'Retargeting', impressions: 1500000, clicks: 67000, spend: 24800, sales: 86800, roas: 3.5 },
];

// Define KPI data
const kpis = [
  {
    title: "Total Sales",
    value: "$345,892",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="h-5 w-5 text-oraxyn-blue" />
  },
  {
    title: "ROAS",
    value: "3.2x",
    change: "+8.3%",
    trend: "up",
    icon: <TrendingUp className="h-5 w-5 text-green-500" />
  },
  {
    title: "Conversions",
    value: "12,549",
    change: "+5.7%",
    trend: "up",
    icon: <ShoppingCart className="h-5 w-5 text-amber-500" />
  },
  {
    title: "New Customers",
    value: "3,842",
    change: "-2.1%",
    trend: "down",
    icon: <Users className="h-5 w-5 text-purple-500" />
  }
];

const Overview = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [chartData, setChartData] = useState(dailyData);
  
  useEffect(() => {
    switch(timeframe) {
      case 'daily':
        setChartData(dailyData);
        break;
      case 'weekly':
        setChartData(weeklyData);
        break;
      case 'monthly':
        setChartData(monthlyData);
        break;
      default:
        setChartData(dailyData);
    }
  }, [timeframe]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-oraxyn-gray">
          Dashboard Overview
        </h2>
        
        <div className="mt-4 sm:mt-0">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                  <p className="text-2xl font-bold mt-1 text-oraxyn-gray">{kpi.value}</p>
                </div>
                <div className="p-2 rounded-full bg-gray-50">
                  {kpi.icon}
                </div>
              </div>
              <div className="mt-3 flex items-center">
                {kpi.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {kpi.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Main charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales by Channel */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Sales by Channel</CardTitle>
            <CardDescription>
              Performance across Amazon, Facebook & Google
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, '']}
                    contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="amazon" stackId="1" stroke="#FF9900" fill="#FF9900" fillOpacity={0.6} name="Amazon" />
                  <Area type="monotone" dataKey="facebook" stackId="1" stroke="#1877F2" fill="#1877F2" fillOpacity={0.6} name="Facebook" />
                  <Area type="monotone" dataKey="google" stackId="1" stroke="#34A853" fill="#34A853" fillOpacity={0.6} name="Google" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Total Performance */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Total Performance</CardTitle>
            <CardDescription>
              Combined metrics across all channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, '']}
                    contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Total Sales" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Campaign performance */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
          <CardDescription>
            Metrics for your top-performing campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="roas">
            <TabsList className="mb-4">
              <TabsTrigger value="roas">ROAS</TabsTrigger>
              <TabsTrigger value="spend">Ad Spend</TabsTrigger>
              <TabsTrigger value="clicks">Clicks</TabsTrigger>
              <TabsTrigger value="impressions">Impressions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roas">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={campaignData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value) => [`${value}x`, 'ROAS']}
                      contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="roas" fill="#3B82F6" radius={[4, 4, 0, 0]} name="ROAS" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="spend">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={campaignData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value) => [`$${value}`, 'Ad Spend']}
                      contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="spend" fill="#6366F1" radius={[4, 4, 0, 0]} name="Ad Spend" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="clicks">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={campaignData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value) => [value.toLocaleString(), 'Clicks']}
                      contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="clicks" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Clicks" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="impressions">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={campaignData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip 
                      formatter={(value) => [value.toLocaleString(), 'Impressions']}
                      contentStyle={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="impressions" fill="#10B981" radius={[4, 4, 0, 0]} name="Impressions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
