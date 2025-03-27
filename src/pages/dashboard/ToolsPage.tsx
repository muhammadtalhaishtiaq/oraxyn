
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, DollarSign, LayoutList, Sparkles, FileText, Clock } from 'lucide-react';

const ToolsPage = () => {
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oraxyn-turquoise"></div>
      </div>
    );
  }

  const tools = [
    {
      title: 'Keyword Generator',
      description: 'AI-powered tool to generate high-converting keywords for your marketplace products',
      icon: <LayoutList className="h-10 w-10 text-oraxyn-turquoise" />,
      path: '/dashboard/tools/keywords',
      buttonText: 'Generate Keywords'
    },
    {
      title: 'Ad Copy Generator',
      description: 'Create optimized ad copy and images for Amazon, Walmart, and eBay listings',
      icon: <FileText className="h-10 w-10 text-oraxyn-purple" />,
      path: '/dashboard/tools/ad-copy',
      buttonText: 'Create Ad Copy'
    },
    {
      title: 'Bid Optimizer',
      description: 'Automatically optimize your bids to maximize ROAS and minimize ACoS',
      icon: <DollarSign className="h-10 w-10 text-oraxyn-green" />,
      path: '/dashboard/tools/optimizer',
      buttonText: 'Optimize Bids'
    },
    {
      title: 'Campaign Scheduler',
      description: 'Schedule campaigns to run at specific times based on performance data',
      icon: <Clock className="h-10 w-10 text-oraxyn-blue" />,
      path: '/dashboard/tools/scheduler',
      buttonText: 'Schedule Campaigns'
    },
    {
      title: 'AI Campaign Creator',
      description: 'Create optimized campaigns with just a few clicks using AI technology',
      icon: <Sparkles className="h-10 w-10 text-oraxyn-purple" />,
      path: '/dashboard/tools/campaigns',
      buttonText: 'Create Campaign'
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">Tools & Utilities</h1>
          <p className="text-gray-500">
            Optimize your marketplace advertising with our powerful AI toolset
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <CardTitle>{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 mb-6">{tool.description}</p>
                <Button 
                  className="w-full bg-oraxyn-turquoise hover:bg-oraxyn-darkTurquoise"
                  onClick={() => navigate(tool.path)}
                >
                  {tool.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ToolsPage;
