import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000';

interface ApiOrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  size: string;
  color: string;
  price: string | number;
}

interface ApiOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  total: string | number;
  status: string;
  paymentMethod: string;
  shippingStreet: string;
  shippingCity: string;
  shippingZipCode: string;
  createdAt: string;
  updatedAt: string;
  items: ApiOrderItem[];
}

export const useOrders = () => {
  const [orders, setOrders] = useState<ApiOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/orders`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders ?? []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { orders, loading, error };
};