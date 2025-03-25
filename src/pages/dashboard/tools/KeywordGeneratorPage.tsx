
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Download, 
  Copy, 
  Plus, 
  Info,
  BarChart2, 
  Zap
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const KeywordGeneratorPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [seedKeywords, setSeedKeywords] = useState('');
  const [generatedKeywords, setGeneratedKeywords] = useState<any[]>([]);
  
  // Sample data for demonstration
  const sampleKeywords = [
    { keyword: 'organic dog food', volume: 6500, competition: 'high', cpc: 3.45, relevance: 98 },
    { keyword: 'natural dog food brands', volume: 3200, competition: 'medium', cpc: 2.78, relevance: 95 },
    { keyword: 'grain free dog food', volume: 8900, competition: 'high', cpc: 4.12, relevance: 92 },
    { keyword: 'best organic dog food', volume: 4100, competition: 'high', cpc: 3.89, relevance: 90 },
    { keyword: 'organic puppy food', volume: 2700, competition: 'medium', cpc: 3.21, relevance: 87 },
    { keyword: 'organic dog treats', volume: 3800, competition: 'medium', cpc: 2.45, relevance: 85 },
    { keyword: 'affordable organic dog food', volume: 1900, competition: 'low', cpc: 1.98, relevance: 83 },
    { keyword: 'organic dog food recipes', volume: 1200, competition: 'low', cpc: 1.25, relevance: 80 },
    { keyword: 'organic dog food for allergies', volume: 1500, competition: 'medium', cpc: 2.76, relevance: 78 },
    { keyword: 'organic dog food bulk', volume: 980, competition: 'low', cpc: 1.65, relevance: 75 },
    { keyword: 'organic dog food subscription', volume: 1100, competition: 'medium', cpc: 2.32, relevance: 72 },
    { keyword: 'organic dog food comparison', volume: 850, competition: 'low', cpc: 1.48, relevance: 70 },
  ];
  
  const handleGenerate = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedKeywords(sampleKeywords);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleCopyKeywords = () => {
    const keywordsText = generatedKeywords.map(k => k.keyword).join('\n');
    navigator.clipboard.writeText(keywordsText);
    // Show toast or notification here
  };
  
  const handleDownloadCSV = () => {
    const headers = ['Keyword', 'Volume', 'Competition', 'CPC', 'Relevance'];
    const csvContent = [
      headers.join(','),
      ...generatedKeywords.map(k => [
        k.keyword, 
        k.volume, 
        k.competition, 
        k.cpc, 
        k.relevance
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'generated_keywords.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Keyword Generator</h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Generate Keywords</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Platform
                  </label>
                  <Select defaultValue="amazon">
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amazon">Amazon</SelectItem>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Marketplace
                  </label>
                  <Select defaultValue="usa">
                    <SelectTrigger>
                      <SelectValue placeholder="Select marketplace" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <Select defaultValue="pet">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pet">Pet Supplies</SelectItem>
                      <SelectItem value="home">Home & Kitchen</SelectItem>
                      <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Seed Keywords
                    </label>
                    <span className="text-xs text-gray-500">
                      One per line
                    </span>
                  </div>
                  <Textarea 
                    placeholder="Enter seed keywords..."
                    className="min-h-[120px]"
                    value={seedKeywords}
                    onChange={(e) => setSeedKeywords(e.target.value)}
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Keyword Volume
                    </label>
                    <div className="flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Info className="h-4 w-4 text-gray-400" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Filter keywords by monthly search volume</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="pt-2 px-2">
                    <Slider defaultValue={[500, 10000]} min={0} max={15000} step={100} />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>0</span>
                      <span>15,000+</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Relevance Score
                    </label>
                    <div className="flex items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Info className="h-4 w-4 text-gray-400" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Minimum relevance score for keywords (0-100)</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <div className="pt-2 px-2">
                    <Slider defaultValue={[70]} min={0} max={100} step={1} />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>0</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={handleGenerate}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Generate Keywords
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Generated Keywords</h2>
                
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" onClick={handleCopyKeywords} disabled={generatedKeywords.length === 0}>
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy keywords</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" onClick={handleDownloadCSV} disabled={generatedKeywords.length === 0}>
                          <Download className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Download CSV</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              
              {generatedKeywords.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No keywords generated yet</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Enter your seed keywords and click "Generate Keywords" to get started
                  </p>
                </div>
              ) : (
                <Tabs defaultValue="table">
                  <div className="flex justify-between items-center mb-4">
                    <TabsList>
                      <TabsTrigger value="table">Table View</TabsTrigger>
                      <TabsTrigger value="stats">Statistics</TabsTrigger>
                    </TabsList>
                    
                    <div className="flex items-center">
                      <Input 
                        placeholder="Filter results..." 
                        className="w-48 h-8 text-sm"
                      />
                    </div>
                  </div>
                  
                  <TabsContent value="table">
                    <div className="border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Keyword</TableHead>
                            <TableHead className="text-right">Volume</TableHead>
                            <TableHead>Competition</TableHead>
                            <TableHead className="text-right">CPC ($)</TableHead>
                            <TableHead className="text-right">Relevance</TableHead>
                            <TableHead className="w-[100px] text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {generatedKeywords.map((keyword) => (
                            <TableRow key={keyword.keyword}>
                              <TableCell className="font-medium">{keyword.keyword}</TableCell>
                              <TableCell className="text-right">{keyword.volume.toLocaleString()}</TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  keyword.competition === 'high' ? 'bg-red-100 text-red-800' :
                                  keyword.competition === 'medium' ? 'bg-amber-100 text-amber-800' :
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {keyword.competition}
                                </span>
                              </TableCell>
                              <TableCell className="text-right">${keyword.cpc.toFixed(2)}</TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end">
                                  <div className="w-12 bg-gray-200 rounded-full h-1.5 mr-2">
                                    <div 
                                      className={`h-1.5 rounded-full ${
                                        keyword.relevance >= 90 ? 'bg-green-500' :
                                        keyword.relevance >= 80 ? 'bg-green-400' :
                                        keyword.relevance >= 70 ? 'bg-amber-400' :
                                        'bg-red-400'
                                      }`}
                                      style={{ width: `${keyword.relevance}%` }}
                                    ></div>
                                  </div>
                                  <span>{keyword.relevance}%</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="stats">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-md p-4">
                        <h3 className="text-sm font-medium mb-4 flex items-center">
                          <BarChart2 className="h-4 w-4 mr-2 text-purple-500" />
                          Volume Distribution
                        </h3>
                        <div className="h-64 bg-gray-50 rounded flex items-end justify-around p-4">
                          <div className="w-1/6 bg-purple-200 rounded-t" style={{ height: '20%' }}></div>
                          <div className="w-1/6 bg-purple-300 rounded-t" style={{ height: '45%' }}></div>
                          <div className="w-1/6 bg-purple-400 rounded-t" style={{ height: '75%' }}></div>
                          <div className="w-1/6 bg-purple-500 rounded-t" style={{ height: '90%' }}></div>
                          <div className="w-1/6 bg-purple-600 rounded-t" style={{ height: '60%' }}></div>
                          <div className="w-1/6 bg-purple-700 rounded-t" style={{ height: '30%' }}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>0-1k</span>
                          <span>1k-3k</span>
                          <span>3k-5k</span>
                          <span>5k-7k</span>
                          <span>7k-10k</span>
                          <span>10k+</span>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <h3 className="text-sm font-medium mb-4 flex items-center">
                          <BarChart2 className="h-4 w-4 mr-2 text-purple-500" />
                          Competition Levels
                        </h3>
                        <div className="h-64 flex items-center justify-center">
                          <div className="w-full h-64 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-2xl font-bold">42%</div>
                                  <div className="text-xs text-gray-500">High</div>
                                </div>
                              </div>
                            </div>
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#e63946"
                                strokeWidth="12"
                                strokeDasharray="251.2"
                                strokeDashoffset="146"
                                transform="rotate(-90 50 50)"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#f7a440"
                                strokeWidth="12"
                                strokeDasharray="251.2"
                                strokeDashoffset="196"
                                transform="rotate(-90 50 50)"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke="#33a852"
                                strokeWidth="12"
                                strokeDasharray="251.2"
                                strokeDashoffset="175"
                                transform="rotate(125 50 50)"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-center gap-6 mt-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <span className="text-xs">High (42%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-amber-400 mr-2"></div>
                            <span className="text-xs">Medium (33%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-xs">Low (25%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default KeywordGeneratorPage;
