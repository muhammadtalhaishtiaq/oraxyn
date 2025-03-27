
import { useState, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { 
  Upload, 
  Image as ImageIcon, 
  FileText, 
  Copy, 
  Download, 
  Loader2, 
  Plus, 
  Check,
  X
} from 'lucide-react';

const AdCopyGeneratorPage = () => {
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  const [productInfo, setProductInfo] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    platform: 'amazon',
    targetAudience: '',
    keySellingPoints: '',
  });
  const [productImages, setProductImages] = useState<{ id: string; name: string; url: string }[]>([]);
  const [generatedAdCopy, setGeneratedAdCopy] = useState<{
    title: string;
    description: string;
    bulletPoints: string[];
    keywords: string[];
    images?: string[];
  } | null>(null);
  
  const [savedAdCopies, setSavedAdCopies] = useState<{
    id: string;
    productName: string;
    platform: string;
    title: string;
    description: string;
    bulletPoints: string[];
    date: string;
  }[]>([
    {
      id: '1',
      productName: 'Smart Home Assistant',
      platform: 'amazon',
      title: 'Premium Smart Home Assistant with Voice Control & Smart Home Integration',
      description: 'Transform your home with our advanced Smart Home Assistant. This premium device offers seamless voice control, smart home integration, and personalized assistance for all your daily needs.',
      bulletPoints: [
        'Voice-activated control for all smart home devices',
        'Premium sound quality for music and calls',
        'Advanced AI for personalized assistance',
        'Seamless integration with existing smart home systems',
        'Privacy-focused with physical mute button',
      ],
      date: '2023-10-15',
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setProductInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: { id: string; name: string; url: string }[] = [];

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          newImages.push({
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            name: file.name,
            url: result
          });
          
          if (newImages.length === files.length) {
            setProductImages(prev => [...prev, ...newImages]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (id: string) => {
    setProductImages(prev => prev.filter(img => img.id !== id));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleGenerateAdCopy = () => {
    if (!productInfo.name || !productInfo.description) {
      toast({
        title: "Missing Information",
        description: "Please provide at least a product name and description.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call to generate ad copy
    setTimeout(() => {
      // Different templates based on platform
      let adCopy;
      
      if (productInfo.platform === 'amazon') {
        adCopy = {
          title: `Premium ${productInfo.name} - Professional Grade ${productInfo.category} with Advanced Features`,
          description: `Introducing our high-quality ${productInfo.name}, designed to provide exceptional performance and durability. This professional-grade ${productInfo.category} comes with all advanced features you need for optimal results. Perfect for ${productInfo.targetAudience || 'all users'} who demand the best.`,
          bulletPoints: [
            `Premium quality ${productInfo.name} with professional-grade construction`,
            `Advanced technology ensures optimal performance every time`,
            `Easy to use design perfect for ${productInfo.targetAudience || 'all users'}`,
            `Includes all accessories needed for immediate use`,
            `Backed by our satisfaction guarantee and responsive customer service`
          ],
          keywords: [
            `premium ${productInfo.name}`,
            `professional ${productInfo.category}`,
            `high quality ${productInfo.name}`,
            `advanced ${productInfo.category}`,
            `best ${productInfo.name} for ${productInfo.targetAudience || 'home'}`
          ]
        };
      } else if (productInfo.platform === 'walmart') {
        adCopy = {
          title: `Value ${productInfo.name} - Affordable Quality ${productInfo.category} for Everyday Use`,
          description: `Get great value with our affordable ${productInfo.name}. This quality ${productInfo.category} is perfect for everyday use, providing all the essential features without breaking the bank. Ideal for ${productInfo.targetAudience || 'families'} looking for quality and value.`,
          bulletPoints: [
            `Affordable ${productInfo.name} without compromising on quality`,
            `Perfect for everyday use with essential features included`,
            `Family-friendly design suitable for ${productInfo.targetAudience || 'all ages'}`,
            `Great value with all necessary components included`,
            `Reliable performance backed by customer satisfaction guarantee`
          ],
          keywords: [
            `affordable ${productInfo.name}`,
            `value ${productInfo.category}`,
            `quality ${productInfo.name}`,
            `everyday ${productInfo.category}`,
            `family ${productInfo.name}`
          ]
        };
      } else {
        adCopy = {
          title: `Unique ${productInfo.name} - One-of-a-Kind ${productInfo.category} for Collectors and Enthusiasts`,
          description: `Discover this unique ${productInfo.name}, a rare find in the world of ${productInfo.category}. Perfect for collectors and enthusiasts who appreciate exceptional quality and distinctive design. This ${productInfo.name} stands out from mass-produced alternatives with its special features and attention to detail.`,
          bulletPoints: [
            `Unique ${productInfo.name} with one-of-a-kind features`,
            `Exceptional quality perfect for collectors and enthusiasts`,
            `Distinctive design that stands out from mass-produced alternatives`,
            `Carefully crafted with attention to every detail`,
            `Limited availability makes this a rare find`
          ],
          keywords: [
            `unique ${productInfo.name}`,
            `rare ${productInfo.category}`,
            `collector ${productInfo.name}`,
            `one of a kind ${productInfo.category}`,
            `special ${productInfo.name}`
          ]
        };
      }
      
      // Simulate generated ad images if real images were uploaded
      if (productImages.length > 0) {
        adCopy.images = productImages.map(img => img.url);
      }
      
      setGeneratedAdCopy(adCopy);
      setLoading(false);
      
      toast({
        title: "Ad Copy Generated",
        description: "Your ad copy has been successfully generated.",
      });
    }, 2500);
  };

  const handleSaveAdCopy = () => {
    if (!generatedAdCopy) {
      toast({
        title: "Nothing to Save",
        description: "Please generate ad copy first.",
        variant: "destructive"
      });
      return;
    }
    
    const newAdCopy = {
      id: Date.now().toString(),
      productName: productInfo.name,
      platform: productInfo.platform,
      title: generatedAdCopy.title,
      description: generatedAdCopy.description,
      bulletPoints: generatedAdCopy.bulletPoints,
      date: new Date().toISOString().split('T')[0],
    };
    
    setSavedAdCopies(prev => [newAdCopy, ...prev]);
    
    toast({
      title: "Ad Copy Saved",
      description: "Your ad copy has been saved successfully.",
    });
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    
    toast({
      title: "Copied to Clipboard",
      description: "Text has been copied to your clipboard.",
    });
  };

  const handleExportAdCopy = (adCopy: typeof savedAdCopies[0]) => {
    const content = `
TITLE:
${adCopy.title}

DESCRIPTION:
${adCopy.description}

BULLET POINTS:
${adCopy.bulletPoints.map(point => `• ${point}`).join('\n')}

PLATFORM: ${adCopy.platform.toUpperCase()}
DATE: ${adCopy.date}
    `.trim();
    
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${adCopy.productName.replace(/\s+/g, '-').toLowerCase()}-ad-copy.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Ad Copy Exported",
      description: `Ad copy exported as ${element.download}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-oraxyn-gray mb-2">Ad Copy Generator</h1>
          <p className="text-gray-500">
            Create optimized ad copy and images for marketplace listings
          </p>
        </div>
        
        <Tabs defaultValue="create" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Create Ad Copy</TabsTrigger>
            <TabsTrigger value="saved">Saved Ad Copies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="create" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
                <CardDescription>
                  Provide details about your product to generate optimized ad copy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="e.g. Wireless Bluetooth Earbuds" 
                      value={productInfo.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Product Price</Label>
                    <Input 
                      id="price" 
                      name="price"
                      placeholder="e.g. 59.99" 
                      value={productInfo.price}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Product Category</Label>
                  <Input 
                    id="category" 
                    name="category"
                    placeholder="e.g. Electronics" 
                    value={productInfo.category}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    placeholder="Describe your product in detail..." 
                    className="min-h-32"
                    value={productInfo.description}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience</Label>
                    <Input 
                      id="targetAudience" 
                      name="targetAudience"
                      placeholder="e.g. Fitness enthusiasts, Working professionals" 
                      value={productInfo.targetAudience}
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
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="keySellingPoints">Key Selling Points</Label>
                  <Textarea 
                    id="keySellingPoints" 
                    name="keySellingPoints"
                    placeholder="List unique features and benefits..." 
                    className="min-h-20"
                    value={productInfo.keySellingPoints}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Product Images</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
                    {productImages.map((image) => (
                      <div key={image.id} className="relative group">
                        <img 
                          src={image.url} 
                          alt={image.name} 
                          className="h-32 w-full object-cover rounded-md border border-gray-200"
                        />
                        <button 
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(image.id)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    
                    <div 
                      className="h-32 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={triggerFileInput}
                    >
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Upload Images</span>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*" 
                        multiple 
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handleGenerateAdCopy} 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Ad Copy...
                    </>
                  ) : (
                    <>
                      Generate Ad Copy
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
            
            {generatedAdCopy && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Generated Ad Copy</CardTitle>
                  <Button onClick={handleSaveAdCopy}>
                    <Plus className="mr-2 h-4 w-4" />
                    Save Ad Copy
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-700">Title</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyText(generatedAdCopy.title)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      {generatedAdCopy.title}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-700">Description</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyText(generatedAdCopy.description)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      {generatedAdCopy.description}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-700">Bullet Points</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyText(generatedAdCopy.bulletPoints.join('\n'))}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy All
                      </Button>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      <ul className="space-y-1 list-disc pl-5">
                        {generatedAdCopy.bulletPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-700">Suggested Keywords</h3>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyText(generatedAdCopy.keywords.join(', '))}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy All
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {generatedAdCopy.keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {generatedAdCopy.images && generatedAdCopy.images.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Product Images</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {generatedAdCopy.images.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt={`Product image ${index + 1}`} 
                            className="h-32 w-full object-cover rounded-md border border-gray-200"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="saved">
            {savedAdCopies.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-2">No Saved Ad Copies</h3>
                <p className="text-gray-500 mb-6">Generate and save ad copies to access them here.</p>
                <Button onClick={() => setActiveTab('create')}>
                  Create Ad Copy
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {savedAdCopies.map((adCopy) => (
                  <Card key={adCopy.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle>{adCopy.productName}</CardTitle>
                        <Badge>{adCopy.platform}</Badge>
                      </div>
                      <CardDescription>Created on {adCopy.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1 flex items-center justify-between">
                          <span>Title</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleCopyText(adCopy.title)}
                            className="h-6 p-1"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </h3>
                        <p className="text-sm">{adCopy.title}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1 flex items-center justify-between">
                          <span>Description</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleCopyText(adCopy.description)}
                            className="h-6 p-1"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </h3>
                        <p className="text-sm">{adCopy.description}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1 flex items-center justify-between">
                          <span>Bullet Points</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleCopyText(adCopy.bulletPoints.join('\n'))}
                            className="h-6 p-1"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </h3>
                        <ul className="text-sm list-disc pl-5 space-y-0.5">
                          {adCopy.bulletPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-2 flex justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleExportAdCopy(adCopy)}
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

export default AdCopyGeneratorPage;
