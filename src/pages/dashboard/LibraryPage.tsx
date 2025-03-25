
import { useState } from 'react';
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
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  FileText, 
  Image as ImageIcon, 
  Film, 
  Grid, 
  List, 
  Download, 
  Copy, 
  Edit2, 
  Trash
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LibraryPage = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  
  const assets = [
    {
      id: 'a1',
      name: 'Summer Product Catalog',
      type: 'document',
      format: 'pdf',
      size: '3.2 MB',
      dimensions: '',
      created: '2023-09-18',
      updated: '2023-10-01',
      thumbnail: 'https://via.placeholder.com/300x400/f3f4f6/94a3b8?text=PDF'
    },
    {
      id: 'a2',
      name: 'Product Hero Image',
      type: 'image',
      format: 'jpg',
      size: '1.7 MB',
      dimensions: '2400 x 1600 px',
      created: '2023-10-05',
      updated: '2023-10-05',
      thumbnail: 'https://via.placeholder.com/300x200/f0fdfa/134e4a?text=JPG'
    },
    {
      id: 'a3',
      name: 'Brand Guidelines',
      type: 'document',
      format: 'pdf',
      size: '5.8 MB',
      dimensions: '',
      created: '2023-08-22',
      updated: '2023-09-15',
      thumbnail: 'https://via.placeholder.com/300x400/f3f4f6/94a3b8?text=PDF'
    },
    {
      id: 'a4',
      name: 'Product Demo Video',
      type: 'video',
      format: 'mp4',
      size: '24.5 MB',
      dimensions: '1920 x 1080 px',
      created: '2023-09-30',
      updated: '2023-09-30',
      thumbnail: 'https://via.placeholder.com/300x200/fef2f2/991b1b?text=MP4'
    },
    {
      id: 'a5',
      name: 'Social Media Banner',
      type: 'image',
      format: 'png',
      size: '0.9 MB',
      dimensions: '1200 x 628 px',
      created: '2023-10-10',
      updated: '2023-10-12',
      thumbnail: 'https://via.placeholder.com/300x150/eff6ff/1e40af?text=PNG'
    },
    {
      id: 'a6',
      name: 'Quarterly Report',
      type: 'document',
      format: 'xlsx',
      size: '1.4 MB',
      dimensions: '',
      created: '2023-09-28',
      updated: '2023-10-02',
      thumbnail: 'https://via.placeholder.com/300x400/f0fdf4/166534?text=XLSX'
    },
    {
      id: 'a7',
      name: 'Customer Testimonial',
      type: 'video',
      format: 'mp4',
      size: '18.2 MB',
      dimensions: '1920 x 1080 px',
      created: '2023-09-20',
      updated: '2023-09-20',
      thumbnail: 'https://via.placeholder.com/300x200/fef2f2/991b1b?text=MP4'
    },
    {
      id: 'a8',
      name: 'Product Icon Set',
      type: 'image',
      format: 'svg',
      size: '0.3 MB',
      dimensions: 'Vector',
      created: '2023-10-07',
      updated: '2023-10-08',
      thumbnail: 'https://via.placeholder.com/300x300/f5f3ff/5b21b6?text=SVG'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Asset Library</h1>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" /> Upload Asset
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="all">All Assets</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button 
                variant={viewType === 'grid' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewType('grid')}
                className={viewType === 'grid' ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewType === 'list' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewType('list')}
                className={viewType === 'list' ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative w-full sm:w-auto">
              <Input 
                placeholder="Search assets..." 
                className="pl-10 w-full sm:w-64"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-4 w-4" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="File Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                  <SelectItem value="document">Documents</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-36">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="size">Size</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
          </div>
          
          {/* Assets */}
          <TabsContent value="all">
            {viewType === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {assets.map((asset) => (
                  <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="aspect-square bg-gray-100 relative group">
                      <img 
                        src={asset.thumbnail} 
                        alt={asset.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-2 right-2">
                        {asset.type === 'document' && <FileText className="h-5 w-5 text-white drop-shadow-md" />}
                        {asset.type === 'image' && <ImageIcon className="h-5 w-5 text-white drop-shadow-md" />}
                        {asset.type === 'video' && <Film className="h-5 w-5 text-white drop-shadow-md" />}
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm truncate" title={asset.name}>{asset.name}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span>{asset.format.toUpperCase()} • {asset.size}</span>
                        <span>{asset.updated.split('-').slice(1).reverse().join('/')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Type</th>
                      <th className="py-3 px-4 text-left">Size</th>
                      <th className="py-3 px-4 text-left">Dimensions</th>
                      <th className="py-3 px-4 text-left">Created</th>
                      <th className="py-3 px-4 text-left">Updated</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset) => (
                      <tr key={asset.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-3">
                              {asset.type === 'document' && <FileText className="h-4 w-4 text-gray-500" />}
                              {asset.type === 'image' && <ImageIcon className="h-4 w-4 text-gray-500" />}
                              {asset.type === 'video' && <Film className="h-4 w-4 text-gray-500" />}
                            </div>
                            <span className="font-medium">{asset.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100">
                            {asset.format.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4">{asset.size}</td>
                        <td className="py-3 px-4">{asset.dimensions || '-'}</td>
                        <td className="py-3 px-4">{asset.created}</td>
                        <td className="py-3 px-4">{asset.updated}</td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" /> Download
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="mr-2 h-4 w-4" /> Copy Link
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit2 className="mr-2 h-4 w-4" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="images">
            {viewType === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {assets.filter(asset => asset.type === 'image').map((asset) => (
                  // Same grid layout as above for images
                  <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="aspect-square bg-gray-100 relative group">
                      <img 
                        src={asset.thumbnail} 
                        alt={asset.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-2 right-2">
                        <ImageIcon className="h-5 w-5 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm truncate" title={asset.name}>{asset.name}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span>{asset.format.toUpperCase()} • {asset.size}</span>
                        <span>{asset.updated.split('-').slice(1).reverse().join('/')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Same list layout as above, filtered for images
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Type</th>
                      <th className="py-3 px-4 text-left">Size</th>
                      <th className="py-3 px-4 text-left">Dimensions</th>
                      <th className="py-3 px-4 text-left">Created</th>
                      <th className="py-3 px-4 text-left">Updated</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.filter(asset => asset.type === 'image').map((asset) => (
                      <tr key={asset.id} className="border-b border-gray-200 hover:bg-gray-50">
                        {/* Same row content as above */}
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center mr-3">
                              <ImageIcon className="h-4 w-4 text-gray-500" />
                            </div>
                            <span className="font-medium">{asset.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100">
                            {asset.format.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4">{asset.size}</td>
                        <td className="py-3 px-4">{asset.dimensions || '-'}</td>
                        <td className="py-3 px-4">{asset.created}</td>
                        <td className="py-3 px-4">{asset.updated}</td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" /> Download
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="mr-2 h-4 w-4" /> Copy Link
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit2 className="mr-2 h-4 w-4" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="videos">
            {/* Similar structure for videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {assets.filter(asset => asset.type === 'video').map((asset) => (
                <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  {/* Video asset card, similar to image */}
                  <div className="aspect-video bg-gray-100 relative group">
                    <img 
                      src={asset.thumbnail} 
                      alt={asset.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Film className="h-5 w-5 text-white drop-shadow-md" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-75 flex items-center justify-center">
                        <div className="w-3 h-3 border-t-8 border-t-transparent border-l-8 border-l-black border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate" title={asset.name}>{asset.name}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                      <span>{asset.format.toUpperCase()} • {asset.size}</span>
                      <span>{asset.updated.split('-').slice(1).reverse().join('/')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            {/* Similar structure for documents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {assets.filter(asset => asset.type === 'document').map((asset) => (
                <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="aspect-[3/4] bg-gray-100 relative group">
                    <img 
                      src={asset.thumbnail} 
                      alt={asset.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="secondary" size="sm" className="rounded-full w-8 h-8 p-0">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <FileText className="h-5 w-5 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate" title={asset.name}>{asset.name}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                      <span>{asset.format.toUpperCase()} • {asset.size}</span>
                      <span>{asset.updated.split('-').slice(1).reverse().join('/')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LibraryPage;
