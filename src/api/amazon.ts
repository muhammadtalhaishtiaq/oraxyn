
// Types for Amazon seller data
export interface AmazonSellerAccount {
  id: string;
  marketplaceId: string;
  sellerName: string;
  sellerId: string;
  connectionStatus: 'connected' | 'pending' | 'error';
  isDefault: boolean;
  products: AmazonProduct[];
}

export interface AmazonProduct {
  id: string;
  asin: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  adSpend: number;
  sales: number;
  acos: number;
  clicks: number;
  impressions: number;
}

// Mock Amazon seller accounts
const mockSellerAccounts: AmazonSellerAccount[] = [
  {
    id: '1',
    marketplaceId: 'US',
    sellerName: 'EFKET Store',
    sellerId: 'A3P43Z824VGMMI',
    connectionStatus: 'connected',
    isDefault: true,
    products: [
      {
        id: '1',
        asin: 'B08FMKN9PL',
        title: 'Smart Watch with Heart Rate Monitor',
        price: 59.99,
        image: 'https://via.placeholder.com/150',
        category: 'Electronics',
        rating: 4.5,
        adSpend: 1250.34,
        sales: 4890.50,
        acos: 25.57,
        clicks: 1203,
        impressions: 24560
      },
      {
        id: '2',
        asin: 'B09DPLM325',
        title: 'Wireless Earbuds with Noise Cancellation',
        price: 79.99,
        image: 'https://via.placeholder.com/150',
        category: 'Electronics',
        rating: 4.3,
        adSpend: 980.45,
        sales: 3450.75,
        acos: 28.41,
        clicks: 890,
        impressions: 19750
      },
      {
        id: '3',
        asin: 'B07GJBBMLX',
        title: 'Portable Bluetooth Speaker Waterproof',
        price: 39.99,
        image: 'https://via.placeholder.com/150',
        category: 'Electronics',
        rating: 4.7,
        adSpend: 765.20,
        sales: 2890.30,
        acos: 26.48,
        clicks: 745,
        impressions: 15680
      }
    ]
  },
  {
    id: '2',
    marketplaceId: 'GB',
    sellerName: 'EFKET UK',
    sellerId: 'A36D3MOFSGWYZR',
    connectionStatus: 'connected',
    isDefault: false,
    products: [
      {
        id: '4',
        asin: 'B08FMLN9PX',
        title: 'Smart Home Security Camera',
        price: 89.99,
        image: 'https://via.placeholder.com/150',
        category: 'Electronics',
        rating: 4.2,
        adSpend: 1450.60,
        sales: 5670.80,
        acos: 25.58,
        clicks: 1350,
        impressions: 28900
      }
    ]
  }
];

// Get all Amazon seller accounts for a user
export const getAmazonSellerAccounts = async (userId: string) => {
  // In a real app, we would filter by user ID
  return mockSellerAccounts;
};

// Get a single Amazon seller account
export const getAmazonSellerAccount = async (accountId: string) => {
  return mockSellerAccounts.find(account => account.id === accountId) || null;
};

// Create a new Amazon seller connection
export const connectAmazonSellerAccount = async (userId: string, accountData: any) => {
  const { sellerId, marketplaceId, sellerName } = accountData;
  
  // Check if already exists
  const existingAccount = mockSellerAccounts.find(
    account => account.sellerId === sellerId && account.marketplaceId === marketplaceId
  );
  
  if (existingAccount) {
    throw new Error('Seller account already connected');
  }
  
  // Create new account (in a real app, this would save to a database)
  const newAccount: AmazonSellerAccount = {
    id: String(Date.now()),
    marketplaceId,
    sellerName,
    sellerId,
    connectionStatus: 'connected',
    isDefault: mockSellerAccounts.length === 0,
    products: []
  };
  
  // In a real app, we would add this to the database
  // For our mock, we'll just return the new account
  return newAccount;
};

// Get products for a seller account
export const getProductsForSellerAccount = async (accountId: string) => {
  const account = mockSellerAccounts.find(acc => acc.id === accountId);
  if (!account) return [];
  return account.products;
};

// Get performance metrics for a seller account
export const getPerformanceMetrics = async (accountId: string, dateRange?: { start: string; end: string }) => {
  // In a real app, this would fetch metrics from the Amazon Advertising API
  // For demo purposes, we'll return mock data
  return {
    totalSales: 24780.45,
    adSpend: 8245.67,
    acos: 33.27,
    roas: 3.01,
    conversions: 245,
    conversionRate: 12.8,
    impressions: 345670,
    clicks: 28950,
    ctr: 8.37,
    avgCpc: 0.28
  };
};
