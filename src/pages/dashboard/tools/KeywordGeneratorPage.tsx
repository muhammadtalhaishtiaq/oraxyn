
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Plus, ArrowRight, Copy, Download, Loader2 } from 'lucide-react';

const KeywordGeneratorPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('generate');
  const [productInfo, setProductInfo] = useState({
    name: '',
    category: '',
    description: '',
    platform: 'amazon',
  });
  const [generatedKeywords, setGeneratedKeywords] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [savedKeywordSets, setSavedKeywordSets] = useState<{ id: string; name: string; keywords: string[]; platform: string }[]>([
    { id: '1', name: 'Home Gadgets', keywords: ['smart home', 'home automation', 'voice assistant', 'smart speaker'], platform: 'amazon' },
    { id: '2', name: 'Kitchen Tools', keywords: ['kitchen gadgets', 'cooking tools', 'food processor', 'blender'], platform: 'walmart' },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setProductInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateKeywords = () => {
    if (!productInfo.name || !productInfo.description) {
      toast({
        title: "Missing Information",
        description: "Please provide product name and description.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call with different keyword sets based on platform
    setTimeout(() => {
      let keywords: string[] = [];
      
      if (productInfo.platform === 'amazon') {
        keywords = [
          "premium " + productInfo.name,
          "best " + productInfo.name,
          productInfo.name + " for home",
          "high quality " + productInfo.name,
          productInfo.name + " with warranty",
          "affordable " + productInfo.name,
          productInfo.category + " " + productInfo.name,
          productInfo.name + " for kitchen",
          "professional " + productInfo.name,
          "top rated " + productInfo.name,
          productInfo.name + " for beginners",
          "luxury " + productInfo.name,
          productInfo.name + " gift",
          productInfo.name + " set",
          "compact " + productInfo.name,
        ];
      } else if (productInfo.platform === 'walmart') {
        keywords = [
          "value " + productInfo.name,
          "discount " + productInfo.name,
          productInfo.name + " family pack",
          "everyday " + productInfo.name,
          productInfo.name + " bundle",
          "inexpensive " + productInfo.name,
          productInfo.category + " " + productInfo.name,
          productInfo.name + " for home",
          "quality " + productInfo.name,
          "affordable " + productInfo.name,
          productInfo.name + " multi-pack",
          "budget friendly " + productInfo.name,
          productInfo.name + " essentials",
          productInfo.name + " value set",
          "basic " + productInfo.name,
        ];
      } else {
        keywords = [
          "unique " + productInfo.name,
          "vintage " + productInfo.name,
          productInfo.name + " handmade",
          "custom " + productInfo.name,
          productInfo.name + " rare",
          "collectible " + productInfo.name,
          productInfo.category + " " + productInfo.name,
          productInfo.name + " one of a kind",
          "artisan " + productInfo.name,
          "specialty " + productInfo.name,
          productInfo.name + " limited edition",
          "exclusive " + productInfo.name,
          productInfo.name + " handcrafted",
          productInfo.name + " vintage collection",
          "antique " + productInfo.name,
        ];
      }
      
      // Simulate AI-generated keywords
      setGeneratedKeywords(keywords);
      setLoading(false);
      
      toast({
        title: "Keywords Generated",
        description: `${keywords.length} keywords have been generated for your product.`,
      });
    }, 2000);
  };

  const handleSelectKeyword = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(prev => prev.filter(k => k !== keyword));
    } else {
      setSelectedKeywords(prev => [...prev, keyword]);
    }
  };

  const handleSaveKeywords = () => {
    if (selectedKeywords.length === 0) {
      toast({
        title: "No Keywords Selected",
        description: "Please select at least one keyword to save.",
        variant: "destructive"
      });
      return;
    }
    
    const keywordSetName = `${productInfo.name} Keywords`;
    const newSet = {
      id: Date.now().toString(),
      name: keywordSetName,
      keywords: selectedKeywords,
      platform: productInfo.platform
    };
    
    setSavedKeywordSets(prev => [newSet, ...prev]);
    
    toast({
      title: "Keywords Saved",
      description: `Saved ${selectedKeywords.length} keywords as "${keywordSetName}"`,
    });
  };

  const handleCopyKeywords = (keywords: string[]) => {
    navigator.clipboard.writeText(keywords.join(', '));
    
    toast({
      title: "Copied to Clipboard",
      description: "Keywords have been copied to your clipboard.",
    });
  };

  const handleExportKeywords = (setName: string, keywords: string[]) => {
    const element = document.createElement("a");
    const file = new Blob([keywords.join('\n')], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${setName.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Keywords Exported",
      description: `Keywords exported as ${element.download}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">AI Keyword Generator</h1>
          <p className="text-gray-500">
            Generate high-converting keywords for your marketplace listings
          </p>
        </div>
        
        <Tabs defaultValue="generate" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Generate Keywords</TabsTrigger>
            <TabsTrigger value="saved">Saved Keywords</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="e.g. Smart Coffee Maker" 
                      value={productInfo.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Product Category</Label>
                    <Input 
                      id="category" 
                      name="category"
                      placeholder="e.g. Kitchen Appliances" 
                      value={productInfo.category}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    placeholder="Describe your product's key features and benefits..." 
                    className="min-h-32"
                    value={productInfo.description}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="platform">Marketplace Platform</Label>
                  <Select 
                    value={productInfo.platform} 
                    onValueChange={(value) => handleSelectChange('platform', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="amazon">Amazon</SelectItem>
                      <SelectItem value="walmart">Walmart</SelectItem>
                      <SelectItem value="ebay">eBay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleGenerateKeywords} 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Keywords...
                    </>
                  ) : (
                    <>
                      Generate Keywords
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
            
            {generatedKeywords.length > 0 && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Generated Keywords</CardTitle>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleCopyKeywords(generatedKeywords)}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy All
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedKeywords(generatedKeywords)}
                    >
                      Select All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {generatedKeywords.map((keyword, index) => (
                      <Badge 
                        key={index}
                        variant={selectedKeywords.includes(keyword) ? "default" : "outline"}
                        className="cursor-pointer text-sm py-1.5"
                        onClick={() => handleSelectKeyword(keyword)}
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      {selectedKeywords.length} of {generatedKeywords.length} keywords selected
                    </span>
                    <Button 
                      onClick={handleSaveKeywords}
                      disabled={selectedKeywords.length === 0}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Save Selected Keywords
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="saved">
            {savedKeywordSets.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-2">No Saved Keywords</h3>
                <p className="text-gray-500 mb-6">Generate and save keywords to access them here.</p>
                <Button onClick={() => setActiveTab('generate')}>
                  Generate Keywords
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {savedKeywordSets.map((set) => (
                  <Card key={set.id}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{set.name}</CardTitle>
                      <Badge>{set.platform}</Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {set.keywords.map((keyword, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="text-sm py-1.5"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyKeywords(set.keywords)}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleExportKeywords(set.name, set.keywords)}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default KeywordGeneratorPage;
