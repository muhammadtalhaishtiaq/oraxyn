
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Search, Copy, Star, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const KeywordOptimizer = () => {
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState<null | {
    keywords: string[];
    longTailKeywords: string[];
    keywordGroups: { name: string; keywords: string[] }[];
    suggestedTitle: string;
    suggestedBulletPoints: string[];
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!productDescription) {
      setError('Please enter a product description');
      return;
    }

    try {
      setIsLoading(true);
      
      // In a real app, this would be an API call to an AI service
      // For demonstration, we'll just simulate a response
      setTimeout(() => {
        // Mock AI-generated keywords
        const mockResults = {
          keywords: [
            'smart watch', 'fitness tracker', 'heart rate monitor', 'sleep tracker',
            'step counter', 'activity tracker', 'bluetooth watch', 'android compatible',
            'iOS compatible', 'waterproof watch', 'sports watch', 'health monitoring'
          ],
          longTailKeywords: [
            'smart watch with heart rate monitor',
            'waterproof fitness tracker with sleep monitoring',
            'bluetooth smart watch for android and ios',
            'activity tracker watch with long battery life',
            'fitness watch with blood oxygen monitoring',
            'smart watch with GPS and heart rate'
          ],
          keywordGroups: [
            {
              name: 'Health Features',
              keywords: ['heart rate monitor', 'blood oxygen', 'sleep tracking', 'health monitoring']
            },
            {
              name: 'Technical Features',
              keywords: ['bluetooth', 'GPS', 'long battery life', 'waterproof', 'touchscreen']
            },
            {
              name: 'Compatibility',
              keywords: ['android compatible', 'iOS compatible', 'smartphone connection']
            }
          ],
          suggestedTitle: 'Advanced Smart Watch with Heart Rate & Sleep Monitoring, Waterproof Fitness Tracker Compatible with Android & iOS',
          suggestedBulletPoints: [
            '【24/7 Health Monitoring】Track heart rate, blood oxygen, and sleep patterns with precision sensors',
            '【Waterproof Design】IP68 waterproof rating allows for swimming and showering without damage',
            '【Long Battery Life】Up to 7 days of battery life on a single charge for continuous use',
            '【Full Compatibility】Works seamlessly with both Android and iOS smartphones via Bluetooth',
            '【Activity Tracking】Monitors steps, calories, distance, and multiple exercise modes'
          ]
        };
        
        setResults(mockResults);
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      console.error('Error generating keywords:', err);
      setError('Failed to generate keywords. Please try again.');
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard',
      description: 'The text has been copied to your clipboard.',
    });
  };

  const downloadResults = () => {
    if (!results) return;
    
    const content = `
# Keyword Optimization Results

## Top Keywords
${results.keywords.join(', ')}

## Long-Tail Keywords
${results.longTailKeywords.join('\n')}

## Keyword Groups
${results.keywordGroups.map(group => `### ${group.name}\n${group.keywords.join(', ')}`).join('\n\n')}

## Suggested Product Title
${results.suggestedTitle}

## Suggested Bullet Points
${results.suggestedBulletPoints.join('\n')}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keyword-optimization-results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: 'Results downloaded',
      description: 'Your keyword optimization results have been downloaded.',
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Search className="mr-2 h-5 w-5 text-oraxyn-blue" />
          AI Keyword Optimizer
        </CardTitle>
        <CardDescription>
          Generate optimized keywords for your Amazon products using AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="productCategory">Product Category (optional)</Label>
            <Input
              id="productCategory"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              placeholder="e.g. Electronics, Kitchen, Beauty, etc."
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="productDescription">Product Description <span className="text-red-500">*</span></Label>
            <Textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Describe your product in detail. Include features, benefits, materials, dimensions, etc."
              rows={5}
              disabled={isLoading}
              required
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-oraxyn-blue hover:bg-oraxyn-darkBlue"
            disabled={isLoading}
          >
            {isLoading ? 'Generating Keywords...' : 'Generate Optimized Keywords'}
          </Button>
        </form>

        {results && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Optimization Results</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={downloadResults}
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Results
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-medium mb-2">Suggested Product Title</h4>
                <div className="relative bg-muted p-3 rounded-md">
                  <p>{results.suggestedTitle}</p>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(results.suggestedTitle)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-2">Top Keywords</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {results.keywords.map((keyword, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
                      onClick={() => copyToClipboard(keyword)}
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => copyToClipboard(results.keywords.join(', '))}
                >
                  <Copy className="mr-1 h-3 w-3" />
                  Copy all
                </Button>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-2">Long-Tail Keywords</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {results.longTailKeywords.map((keyword, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer"
                      onClick={() => copyToClipboard(keyword)}
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => copyToClipboard(results.longTailKeywords.join('\n'))}
                >
                  <Copy className="mr-1 h-3 w-3" />
                  Copy all
                </Button>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-3">Suggested Bullet Points</h4>
                <ul className="space-y-2">
                  {results.suggestedBulletPoints.map((bullet, index) => (
                    <li key={index} className="relative bg-muted p-2 rounded-md">
                      {bullet}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-1 right-1"
                        onClick={() => copyToClipboard(bullet)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs mt-2"
                  onClick={() => copyToClipboard(results.suggestedBulletPoints.join('\n'))}
                >
                  <Copy className="mr-1 h-3 w-3" />
                  Copy all bullet points
                </Button>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-3">Keyword Groups by Category</h4>
                <div className="space-y-3">
                  {results.keywordGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="border rounded-md p-3">
                      <h5 className="font-medium mb-2 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {group.name}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {group.keywords.map((keyword, keywordIndex) => (
                          <Badge 
                            key={keywordIndex} 
                            variant="outline"
                            className="bg-purple-50 text-purple-700 hover:bg-purple-100 cursor-pointer"
                            onClick={() => copyToClipboard(keyword)}
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
