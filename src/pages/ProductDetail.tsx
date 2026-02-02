import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem, setCartOpen } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl mb-4">Producto no encontrado</h1>
          <Link to="/tienda" className="text-accent hover:underline">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Por favor selecciona un talle y un color');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    setCartOpen(true);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="container px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <span>/</span>
            <Link to="/tienda" className="hover:text-foreground">Tienda</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product section */}
        <section className="container px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-card overflow-hidden">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-foreground text-background text-xs font-medium uppercase">
                      Nuevo
                    </span>
                  )}
                  {product.isOnSale && product.originalPrice && (
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium uppercase">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-foreground' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:py-4">
              <div className="sticky top-24">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="font-heading text-3xl md:text-4xl font-semibold mt-2">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Color selection */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Color</span>
                    {selectedColor && <span className="text-sm text-muted-foreground">{selectedColor}</span>}
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor === color.name
                            ? 'border-foreground ring-2 ring-foreground ring-offset-2'
                            : 'border-border hover:border-muted-foreground'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size selection */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Talle</span>
                    <button className="text-sm text-accent hover:underline">Guía de talles</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] px-4 py-2 border text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border hover:border-foreground'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-6">
                  <span className="text-sm font-medium mb-3 block">Cantidad</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-muted transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-muted transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.stock} disponibles
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
                  >
                    Agregar al Carrito
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-4 border transition-colors ${
                      isWishlisted ? 'border-accent bg-accent/10' : 'border-border hover:border-foreground'
                    }`}
                  >
                    <Heart size={20} className={isWishlisted ? 'fill-accent text-accent' : ''} />
                  </button>
                  <button className="p-4 border border-border hover:border-foreground transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Truck size={20} className="text-muted-foreground" />
                    <span>Envío gratis en compras mayores a $50.000</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <RotateCcw size={20} className="text-muted-foreground" />
                    <span>Devolución gratis dentro de 30 días</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield size={20} className="text-muted-foreground" />
                    <span>Compra segura con encriptación SSL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="bg-card py-16">
            <div className="container px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8">
                También te puede interesar
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
