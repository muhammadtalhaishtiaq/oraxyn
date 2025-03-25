
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Clock, AlertCircle, Plus, Check } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

// Mock data for campaign types
const campaignTypes = [
  { id: 'sp', name: 'Sponsored Products' },
  { id: 'sb', name: 'Sponsored Brands' },
  { id: 'sd', name: 'Sponsored Display' },
  { id: 'va', name: 'Video Ads' }
];

type AdScheduleStatus = 'scheduled' | 'active' | 'paused' | 'ended';

// Mock data for ad schedules with proper typing
const mockAdSchedules: AdSchedule[] = [
  {
    id: '1',
    name: 'Black Friday Campaign',
    type: 'Sponsored Products',
    budget: 500,
    startDate: '2025-11-20',
    endDate: '2025-11-30',
    status: 'scheduled'
  },
  {
    id: '2',
    name: 'Christmas Sale',
    type: 'Sponsored Brands',
    budget: 800,
    startDate: '2025-12-10',
    endDate: '2025-12-25',
    status: 'active'
  },
  {
    id: '3',
    name: 'Summer Promotion',
    type: 'Sponsored Display',
    budget: 350,
    startDate: '2026-06-01',
    endDate: '2026-06-30',
    status: 'ended'
  }
];

type AdSchedule = {
  id: string;
  name: string;
  type: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: AdScheduleStatus;
};

export const AmazonAdScheduler = () => {
  const { user } = useAuth();
  const [adSchedules, setAdSchedules] = useState<AdSchedule[]>(mockAdSchedules);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    budget: '',
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 30)), // Default to 30 days from now
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: 'startDate' | 'endDate', date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({ ...prev, [name]: date }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.type || !formData.budget) {
      setError('Please fill all required fields');
      return;
    }

    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      setError('End date must be after start date');
      return;
    }

    try {
      setIsLoading(true);

      // In a real app, this would be an API call to create the ad schedule
      // For now, we'll just simulate success and add to our local state
      setTimeout(() => {
        const newSchedule: AdSchedule = {
          id: Date.now().toString(),
          name: formData.name,
          type: formData.type,
          budget: parseFloat(formData.budget),
          startDate: format(new Date(formData.startDate), 'yyyy-MM-dd'),
          endDate: format(new Date(formData.endDate), 'yyyy-MM-dd'),
          status: 'scheduled' // Explicitly using a valid status from AdScheduleStatus
        };

        setAdSchedules(prev => [newSchedule, ...prev]);
        
        // Reset form
        setFormData({
          name: '',
          type: '',
          budget: '',
          startDate: new Date(),
          endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        
        setShowForm(false);
        
        toast({
          title: 'Ad Schedule Created',
          description: 'Your ad schedule has been created successfully.',
        });
      }, 1000);
    } catch (err) {
      console.error('Error creating ad schedule:', err);
      setError('Failed to create ad schedule. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: AdScheduleStatus) => {
    switch (status) {
      case 'scheduled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Scheduled</span>;
      case 'active':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>;
      case 'paused':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Paused</span>;
      case 'ended':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Ended</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Amazon Ad Scheduler</CardTitle>
          <CardDescription>
            Create and manage scheduled advertising campaigns on Amazon
          </CardDescription>
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          {showForm ? 'Cancel' : 'New Schedule'}
        </Button>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-4 mb-8 p-4 border rounded-md">
            <h3 className="text-lg font-medium">Create Ad Schedule</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Campaign Name <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Black Friday Sale"
                disabled={isLoading}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Campaign Type <span className="text-red-500">*</span></Label>
              <Select 
                onValueChange={(value) => handleSelectChange('type', value)}
                defaultValue={formData.type}
              >
                <SelectTrigger id="type" className="w-full">
                  <SelectValue placeholder="Select campaign type" />
                </SelectTrigger>
                <SelectContent>
                  {campaignTypes.map(type => (
                    <SelectItem key={type.id} value={type.name}>{type.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget">Budget (USD) <span className="text-red-500">*</span></Label>
              <Input
                id="budget"
                name="budget"
                type="number"
                min="1"
                step="0.01"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g. 500"
                disabled={isLoading}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date <span className="text-red-500">*</span></Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(formData.startDate, 'PPP')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => handleDateChange('startDate', date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>End Date <span className="text-red-500">*</span></Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(formData.endDate, 'PPP')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.endDate}
                      onSelect={(date) => handleDateChange('endDate', date)}
                      initialFocus
                      disabled={(date) => date < new Date(formData.startDate)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Ad Schedule'}
              </Button>
            </div>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Campaign</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Budget</th>
                <th className="text-left py-3 px-4 font-medium">Start Date</th>
                <th className="text-left py-3 px-4 font-medium">End Date</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {adSchedules.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500">
                    No ad schedules found. Create your first schedule.
                  </td>
                </tr>
              ) : (
                adSchedules.map((ad) => (
                  <tr key={ad.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{ad.name}</td>
                    <td className="py-3 px-4">{ad.type}</td>
                    <td className="py-3 px-4">${ad.budget.toFixed(2)}</td>
                    <td className="py-3 px-4">{ad.startDate}</td>
                    <td className="py-3 px-4">{ad.endDate}</td>
                    <td className="py-3 px-4">{getStatusBadge(ad.status)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
