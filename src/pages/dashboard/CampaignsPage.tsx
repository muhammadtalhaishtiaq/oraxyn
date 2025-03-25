
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Plus, 
  Filter, 
  ArrowUpDown, 
  MoreHorizontal, 
  ChevronUp, 
  ChevronDown, 
  Edit, 
  Pause, 
  Play, 
  Trash2 
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CampaignsPage = () => {
  const campaigns = [
    {
      id: 'c1',
      name: 'Summer Sale - Sponsored Products',
      platform: 'Amazon',
      status: 'Active',
      budget: 500,
      spend: 324.56,
      roas: 4.2,
      impressions: 54280,
      clicks: 1287,
      ctr: 2.37,
      conversions: 98,
      convRate: 7.61,
      lastUpdated: '2023-10-15'
    },
    {
      id: 'c2',
      name: 'Product Launch - Facebook',
      platform: 'Facebook',
      status: 'Active',
      budget: 750,
      spend: 512.33,
      roas: 3.8,
      impressions: 38450,
      clicks: 2105,
      ctr: 5.47,
      conversions: 143,
      convRate: 6.79,
      lastUpdated: '2023-10-14'
    },
    {
      id: 'c3',
      name: 'Brand Awareness - Display',
      platform: 'Google',
      status: 'Paused',
      budget: 300,
      spend: 187.22,
      roas: 1.9,
      impressions: 27650,
      clicks: 543,
      ctr: 1.96,
      conversions: 21,
      convRate: 3.87,
      lastUpdated: '2023-10-10'
    },
    {
      id: 'c4',
      name: 'Retargeting - Cart Abandoners',
      platform: 'Meta',
      status: 'Active',
      budget: 250,
      spend: 198.75,
      roas: 5.7,
      impressions: 19840,
      clicks: 876,
      ctr: 4.42,
      conversions: 87,
      convRate: 9.93,
      lastUpdated: '2023-10-15'
    },
    {
      id: 'c5',
      name: 'Google Shopping - Holiday',
      platform: 'Google',
      status: 'Draft',
      budget: 1000,
      spend: 0,
      roas: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      conversions: 0,
      convRate: 0,
      lastUpdated: '2023-10-12'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> New Campaign
          </Button>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <Input 
              placeholder="Search campaigns..." 
              className="pl-10 w-full sm:w-64"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="amazon">Amazon</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="meta">Meta</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>
        </div>
        
        {/* Campaigns Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <div className="flex items-center space-x-1">
                    <span>Campaign</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="w-[100px]">Platform</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="text-right w-[100px]">Budget</TableHead>
                <TableHead className="text-right w-[100px]">Spend</TableHead>
                <TableHead className="text-right w-[80px]">
                  <div className="flex items-center justify-end space-x-1">
                    <span>ROAS</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="text-right w-[100px]">Impr.</TableHead>
                <TableHead className="text-right w-[80px]">Clicks</TableHead>
                <TableHead className="text-right w-[80px]">CTR</TableHead>
                <TableHead className="text-right w-[80px]">Conv.</TableHead>
                <TableHead className="text-right w-[80px]">CR</TableHead>
                <TableHead className="w-[100px]">Last Updated</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {campaign.platform === 'Amazon' && (
                        <div className="h-5 w-5 mr-2 rounded-sm bg-yellow-500 flex items-center justify-center text-white font-bold text-xs">A</div>
                      )}
                      {campaign.platform === 'Facebook' && (
                        <div className="h-5 w-5 mr-2 rounded-sm bg-blue-600 flex items-center justify-center text-white font-bold text-xs">F</div>
                      )}
                      {campaign.platform === 'Google' && (
                        <div className="h-5 w-5 mr-2 rounded-sm bg-red-500 flex items-center justify-center text-white font-bold text-xs">G</div>
                      )}
                      {campaign.platform === 'Meta' && (
                        <div className="h-5 w-5 mr-2 rounded-sm bg-blue-500 flex items-center justify-center text-white font-bold text-xs">M</div>
                      )}
                      {campaign.platform}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Paused' ? 'bg-amber-100 text-amber-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">${campaign.budget.toFixed(2)}</TableCell>
                  <TableCell className="text-right">${campaign.spend.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      {campaign.roas > 0 ? (
                        <>
                          <span>{campaign.roas.toFixed(1)}x</span>
                          {campaign.roas >= 3 ? (
                            <ChevronUp className="ml-1 h-4 w-4 text-green-500" />
                          ) : campaign.roas < 2 ? (
                            <ChevronDown className="ml-1 h-4 w-4 text-red-500" />
                          ) : null}
                        </>
                      ) : '-'}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{campaign.impressions.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{campaign.clicks.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{campaign.ctr.toFixed(1)}%</TableCell>
                  <TableCell className="text-right">{campaign.conversions}</TableCell>
                  <TableCell className="text-right">{campaign.convRate.toFixed(1)}%</TableCell>
                  <TableCell>{campaign.lastUpdated}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        {campaign.status === 'Active' ? (
                          <DropdownMenuItem>
                            <Pause className="mr-2 h-4 w-4" /> Pause
                          </DropdownMenuItem>
                        ) : campaign.status === 'Paused' ? (
                          <DropdownMenuItem>
                            <Play className="mr-2 h-4 w-4" /> Activate
                          </DropdownMenuItem>
                        ) : null}
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CampaignsPage;
