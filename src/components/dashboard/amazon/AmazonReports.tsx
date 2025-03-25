
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { FileText, Download, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AmazonReports = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: 'Report Generated',
        description: 'Your report has been generated successfully and is ready to download.',
      });
    }, 2000);
  };
  
  const recentReports = [
    { id: '1', name: 'Amazon Performance Report - March 2023', date: '03/31/2023', type: 'Performance', size: '1.2 MB' },
    { id: '2', name: 'Advertising Campaign Analysis - Q1 2023', date: '03/15/2023', type: 'Campaigns', size: '2.5 MB' },
    { id: '3', name: 'Product Performance Overview - February 2023', date: '02/28/2023', type: 'Products', size: '1.8 MB' },
    { id: '4', name: 'Keyword Performance Report - February 2023', date: '02/25/2023', type: 'Keywords', size: '3.2 MB' },
    { id: '5', name: 'Monthly Sales Summary - January 2023', date: '01/31/2023', type: 'Sales', size: '1.5 MB' },
  ];
  
  const reportTemplates = [
    { id: '1', name: 'Performance Overview', description: 'Overall account performance with key metrics', frequency: 'Daily' },
    { id: '2', name: 'Campaign Analysis', description: 'Detailed breakdown of campaign performance', frequency: 'Weekly' },
    { id: '3', name: 'Product Performance', description: 'Sales and advertising metrics by product', frequency: 'Monthly' },
    { id: '4', name: 'Keyword Analysis', description: 'Performance metrics for all keywords', frequency: 'Weekly' },
    { id: '5', name: 'Competitor Analysis', description: 'Benchmark against competitor performance', frequency: 'Monthly' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Amazon Reports</h2>
        <Button 
          onClick={handleGenerateReport}
          className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Generating...
            </>
          ) : (
            <>
              <FileText className="h-4 w-4 mr-2" />
              Generate New Report
            </>
          )}
        </Button>
      </div>
      
      <Tabs defaultValue="recent">
        <TabsList className="mb-4">
          <TabsTrigger value="recent">Recent Reports</TabsTrigger>
          <TabsTrigger value="templates">Report Templates</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recently Generated Reports</CardTitle>
            </CardHeader>
            <CardContent>
              {recentReports.length === 0 ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No reports generated yet</h3>
                  <p className="text-gray-500 mb-4">
                    Generate your first report to view performance insights
                  </p>
                  <Button 
                    onClick={handleGenerateReport}
                    className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
                    disabled={isGenerating}
                  >
                    Generate Report
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date Generated</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentReports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <FileText className="h-4 w-4 text-gray-400" />
                              <span>{report.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{report.type}</TableCell>
                          <TableCell>{report.date}</TableCell>
                          <TableCell>{report.size}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Report Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Template Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Default Frequency</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportTemplates.map((template) => (
                      <TableRow key={template.id}>
                        <TableCell>
                          <div className="font-medium">{template.name}</div>
                        </TableCell>
                        <TableCell>{template.description}</TableCell>
                        <TableCell>{template.frequency}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={handleGenerateReport}
                              disabled={isGenerating}
                            >
                              {isGenerating ? 'Generating...' : 'Generate Now'}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              Schedule
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scheduled">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No scheduled reports</h3>
                <p className="text-gray-500 mb-4">
                  Schedule reports to be automatically generated on a recurring basis
                </p>
                <Button 
                  variant="outline"
                  className="bg-oraxyn-blue hover:bg-oraxyn-darkBlue text-white"
                >
                  Schedule a Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
