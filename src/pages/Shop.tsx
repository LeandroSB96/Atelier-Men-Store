import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, X, Grid3X3, LayoutGrid, Search } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/product/ProductCard';
import ProductFilters from '@/components/product/ProductFilters';
import { products } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState<2 | 3>(3);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('buscar') || '');

  const selectedCategory = searchParams.get('categoria') || '';
  const selectedSize = searchParams.get('talle') || '';
  const selectedColor = searchParams.get('color') || '';
  const sortBy = searchParams.get('orden') || 'relevancia';
  const searchTerm = searchParams.get('buscar') || '';

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilter('buscar', searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
    updateFilter('buscar', '');
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.colors.some(c => c.name.toLowerCase().includes(term))
      );
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedSize) {
      result = result.filter(p => p.sizes.includes(selectedSize));
    }

    if (selectedColor) {
      result = result.filter(p => p.colors.some(c => c.name === selectedColor));
    }

    // Sort
    switch (sortBy) {
      case 'precio-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'precio-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nuevo':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // relevancia - featured first
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedSize, selectedColor, sortBy, searchTerm]);

  const hasActiveFilters = selectedCategory || selectedSize || selectedColor || searchTerm;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Page header */}
        <div className="bg-card py-8 md:py-12 border-b border-border">
          <div className="container px-4">
            <h1 className="font-heading text-3xl md:text-4xl font-semibold">Tienda</h1>
            <p className="text-muted-foreground mt-2">
              {filteredProducts.length} productos
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>
        </div>

        <div className="container px-4 py-8">
          {/* Search bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full pl-12 pr-24 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-20 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>

          <div className="flex gap-8">
            {/* Desktop filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <ProductFilters
                selectedCategory={selectedCategory}
                selectedSize={selectedSize}
                selectedColor={selectedColor}
                priceRange={[0, 100000]}
                onCategoryChange={(v) => updateFilter('categoria', v)}
                onSizeChange={(v) => updateFilter('talle', v)}
                onColorChange={(v) => updateFilter('color', v)}
                onPriceChange={() => {}}
                onClearFilters={clearFilters}
              />
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium"
                >
                  <Filter size={18} />
                  Filtros
                  {hasActiveFilters && (
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </button>

                <div className="flex items-center gap-4 ml-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => updateFilter('orden', e.target.value)}
                    className="text-sm bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="relevancia">Relevancia</option>
                    <option value="nuevo">Más nuevo</option>
                    <option value="precio-asc">Menor precio</option>
                    <option value="precio-desc">Mayor precio</option>
                  </select>

                  <div className="hidden md:flex items-center gap-2 border-l border-border pl-4">
                    <button
                      onClick={() => setGridCols(2)}
                      className={`p-1.5 transition-colors ${gridCols === 2 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      <LayoutGrid size={18} />
                    </button>
                    <button
                      onClick={() => setGridCols(3)}
                      className={`p-1.5 transition-colors ${gridCols === 3 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      <Grid3X3 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active filters display */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">Filtros:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm">
                      Búsqueda: {searchTerm}
                      <button onClick={clearSearch} className="hover:text-foreground">
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm">
                      {selectedCategory}
                      <button onClick={() => updateFilter('categoria', '')} className="hover:text-foreground">
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {selectedSize && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm">
                      Talle: {selectedSize}
                      <button onClick={() => updateFilter('talle', '')} className="hover:text-foreground">
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  {selectedColor && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm">
                      {selectedColor}
                      <button onClick={() => updateFilter('color', '')} className="hover:text-foreground">
                        <X size={14} />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent hover:underline ml-2"
                  >
                    Limpiar todo
                  </button>
                </div>
              )}

              {/* Product grid */}
              {filteredProducts.length > 0 ? (
                <div className={`grid grid-cols-2 ${gridCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 md:gap-6`}>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-2">No se encontraron productos</p>
                  {searchTerm && (
                    <p className="text-sm text-muted-foreground mb-4">
                      Intenta con otros términos de búsqueda
                    </p>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent hover:underline"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile filters drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50"
            onClick={() => setShowFilters(false)}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="absolute left-0 top-0 h-full w-80 max-w-full bg-background p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-semibold">Filtros</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>
            <ProductFilters
              selectedCategory={selectedCategory}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              priceRange={[0, 100000]}
              onCategoryChange={(v) => { updateFilter('categoria', v); }}
              onSizeChange={(v) => { updateFilter('talle', v); }}
              onColorChange={(v) => { updateFilter('color', v); }}
              onPriceChange={() => {}}
              onClearFilters={() => { clearFilters(); setShowFilters(false); }}
            />
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Shop;
