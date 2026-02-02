import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/producto/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
          <motion.img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Badges - minimal */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1.5 bg-foreground text-background text-[10px] font-medium uppercase tracking-[0.15em]">
                Nuevo
              </span>
            )}
            {product.isOnSale && discount > 0 && (
              <span className="px-3 py-1.5 bg-taupe text-background text-[10px] font-medium uppercase tracking-[0.15em]">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist button - appears on hover */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-4 right-4 p-2.5 bg-background/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              size={16}
              strokeWidth={1.5}
              className={isWishlisted ? 'fill-foreground text-foreground' : 'text-foreground'}
            />
          </motion.button>

          {/* Quick add - appears on hover */}
          <motion.div 
            className="absolute inset-x-0 bottom-0 p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="block w-full py-3 bg-background/95 backdrop-blur-sm text-foreground text-center text-xs font-medium uppercase tracking-[0.15em]">
              Ver Producto
            </span>
          </motion.div>
        </div>
      </Link>

      <div className="mt-5 space-y-2">
        <Link to={`/producto/${product.id}`}>
          <h3 className="text-sm font-normal text-foreground tracking-wide">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium tracking-wide">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {/* Color dots - subtle */}
        <div className="flex gap-1.5 pt-1">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color.name}
              className="w-3 h-3 rounded-full border border-border/50"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
