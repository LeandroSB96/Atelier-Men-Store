import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { categories } from '@/data/products';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSize: string;
  selectedColor: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '38', '39', '40', '41', '42', '43', '44', '45'];
const colors = [
  { name: 'Blanco', hex: '#FFFFFF' },
  { name: 'Negro', hex: '#1a1a1a' },
  { name: 'Gris', hex: '#6b7280' },
  { name: 'Azul', hex: '#3B82F6' },
  { name: 'Marrón', hex: '#8B4513' },
  { name: 'Beige', hex: '#D4A574' }
];

const ProductFilters = ({
  selectedCategory,
  selectedSize,
  selectedColor,
  onCategoryChange,
  onSizeChange,
  onColorChange,
  onClearFilters
}: ProductFiltersProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('category');

  const hasActiveFilters = selectedCategory || selectedSize || selectedColor;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      {/* Active filters */}
      {hasActiveFilters && (
        <div className="pb-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Filtros activos</span>
            <button
              onClick={onClearFilters}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Limpiar todo
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-sm rounded-sm">
                {categories.find(c => c.slug === selectedCategory)?.name}
                <button onClick={() => onCategoryChange('')}>
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedSize && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-sm rounded-sm">
                Talle: {selectedSize}
                <button onClick={() => onSizeChange('')}>
                  <X size={14} />
                </button>
              </span>
            )}
            {selectedColor && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted text-sm rounded-sm">
                {selectedColor}
                <button onClick={() => onColorChange('')}>
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Category filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full py-3 text-left"
        >
          <span className="text-sm font-medium">Categoría</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSection === 'category' ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSection === 'category' && (
          <div className="pb-4 space-y-2">
            <button
              onClick={() => onCategoryChange('')}
              className={`block w-full text-left text-sm py-1 transition-colors ${
                !selectedCategory ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.slug)}
                className={`block w-full text-left text-sm py-1 transition-colors ${
                  selectedCategory === category.slug ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Size filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full py-3 text-left"
        >
          <span className="text-sm font-medium">Talle</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSection === 'size' ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSection === 'size' && (
          <div className="pb-4 flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(selectedSize === size ? '' : size)}
                className={`px-3 py-1.5 text-sm border transition-colors ${
                  selectedSize === size
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border hover:border-foreground'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full py-3 text-left"
        >
          <span className="text-sm font-medium">Color</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSection === 'color' ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSection === 'color' && (
          <div className="pb-4 space-y-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange(selectedColor === color.name ? '' : color.name)}
                className={`flex items-center gap-3 w-full text-left py-1 transition-colors ${
                  selectedColor === color.name ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full border ${
                    selectedColor === color.name ? 'ring-2 ring-accent ring-offset-2' : 'border-border'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-sm">{color.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
