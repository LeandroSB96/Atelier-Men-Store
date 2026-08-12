import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000';

interface ApiImage { url: string; }
interface ApiColor { name: string; hex: string; }
interface ApiSize { size: string; }
interface ApiProduct {
  images: ApiImage[];
  colors: ApiColor[];
  sizes: ApiSize[];
  [key: string]: unknown;
}

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const transformed = data.products.map((p: ApiProduct) => ({
          ...p,
          images: p.images.map((img) => img.url),
          colors: p.colors.map((c) => ({ name: c.name, hex: c.hex })),
          sizes: p.sizes.map((s) => s.size),
        }));
        setProducts(transformed);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};