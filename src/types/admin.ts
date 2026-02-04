export interface AdminUser {
  id: string;
  email: string;
  password?: string;
  role: 'admin' | 'super_admin';
  createdAt: Date;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface SalesStats {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  totalProducts: number;
  lowStockProducts: number;
  pendingOrders: number;
}

export interface DailySales {
  date: string;
  revenue: number;
  orders: number;
}

export interface ProductStats {
  productId: string;
  productName: string;
  unitsSold: number;
  revenue: number;
}

export interface CategoryStats {
  category: string;
  totalSales: number;
  itemsSold: number;
  percentage: number;
}

export interface StoreSettings {
  storeName: string;
  storeEmail: string;
  storePhone: string;
  currency: string;
  taxRate: number;
  shippingCost: number;
  minOrderForFreeShipping: number;
}
