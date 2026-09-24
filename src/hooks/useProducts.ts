import { useState, useEffect } from 'react';
import type { Product } from '@/types/product';
import { products as localProducts } from '@/data/products';

const API_URL = 'http://localhost:3000';

interface ApiImage { url: string; }
interface ApiColor { name: string; hex: string; imageUrl?: string | null; }
interface ApiSize { size: string; }
interface ApiProduct {
  id: string;
  name: string;
  price?: string | number | null;
  originalPrice?: string | number | null;
  description?: string;
  category?: string;
  stock?: number | string | null;
  images?: ApiImage[];
  colors?: ApiColor[];
  sizes?: ApiSize[];
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  [key: string]: unknown;
}

const normalizeImageUrl = (url: string) =>
  url.replace(/\.(png|jpe?g)(?=$|[?#])/i, '.webp');

const normalizeProduct = (p: ApiProduct): Product => ({
  id: p.id,
  name: p.name,
  price: Number(p.price ?? 0),
  originalPrice: p.originalPrice != null ? Number(p.originalPrice) : undefined,
  description: p.description ?? '',
  category: p.category ?? '',
  images: (p.images ?? []).map((img) => normalizeImageUrl(img.url)),
  colors: (p.colors ?? []).map((c) => ({
    name: c.name,
    hex: c.hex,
    image: c.imageUrl ? normalizeImageUrl(c.imageUrl) : undefined,
  })),
  sizes: (p.sizes ?? []).map((s) => s.size),
  stock: Number(p.stock ?? 0),
  isNew: Boolean(p.isNew),
  isFeatured: Boolean(p.isFeatured),
  isOnSale: Boolean(p.isOnSale),
});

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    fetch(`${API_URL}/api/products`, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const transformed = (data.products ?? []).map((p: ApiProduct) => normalizeProduct(p));
        setProducts(transformed.length > 0 ? transformed : localProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setProducts(localProducts);
        setLoading(false);
      })
      .finally(() => window.clearTimeout(timeoutId));

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return { products, loading, error };
};