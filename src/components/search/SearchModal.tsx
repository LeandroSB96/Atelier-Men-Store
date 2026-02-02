import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');

  // Reset query when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 6);
  }, [query]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-[70] bg-background shadow-lg"
          >
            <div className="container mx-auto px-4">
              {/* Search input */}
              <div className="flex items-center gap-4 h-16 lg:h-20 border-b border-border">
                <Search size={20} className="text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar productos..."
                  autoFocus
                  className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                />
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto py-4">
                {query.trim() === '' ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <p className="text-sm">Ingresa un término de búsqueda</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {['Remeras', 'Camisas', 'Jeans', 'Calzado'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1.5 text-xs border border-border hover:border-foreground transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <p>No se encontraron resultados para "{query}"</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/producto/${product.id}`}
                        onClick={onClose}
                        className="flex gap-4 p-3 hover:bg-muted/50 transition-colors group"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-20 h-24 object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {product.category}
                          </p>
                          <h3 className="font-medium text-sm mt-1 group-hover:text-accent transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-sm font-semibold mt-2">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {searchResults.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-border text-center">
                    <Link
                      to={`/tienda?buscar=${encodeURIComponent(query)}`}
                      onClick={onClose}
                      className="text-sm text-accent hover:underline"
                    >
                      Ver todos los resultados →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
