import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2, Truck, RotateCcw, Shield, Sparkles, Ruler, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { products } from '@/data/products';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useProducts } from '@/hooks/useProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);
  const { products: allProducts } = useProducts();
  const { addItem, setCartOpen } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectionMessage, setSelectionMessage] = useState<string | null>(null);
  const [selectionModalOpen, setSelectionModalOpen] = useState(false);
  const [selectionModalTitle, setSelectionModalTitle] = useState('Completa tu selección');
  const [selectionModalDescription, setSelectionModalDescription] = useState('');

  useEffect(() => {
    if (selectionMessage) {
      const timer = window.setTimeout(() => setSelectionMessage(null), 2400);
      return () => window.clearTimeout(timer);
    }
  }, [selectionMessage]);

  // Obtener la imagen del color seleccionado si existe
  const getImageForColor = () => {
    if (!selectedColor) return product.images[selectedImage];
    const color = product.colors.find(c => c.name === selectedColor);
    return color?.image || product.images[selectedImage];
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
    const color = product.colors.find(c => c.name === colorName);
    // Si el color tiene imagen específica, usar esa; si no, mantener la imagen actual
    if (color?.image) {
      const imageIndex = product.images.indexOf(color.image);
      if (imageIndex !== -1) {
        setSelectedImage(imageIndex);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Cargando producto...</div>
      </div>
    );
  }

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

  const validateSelection = () => {
    if (!selectedColor && !selectedSize) {
      setSelectionModalTitle('Completa tu selección');
      setSelectionModalDescription('Para continuar, elegí un talle y un color.');
      setSelectionModalOpen(true);
      return false;
    }

    if (!selectedColor) {
      setSelectionModalTitle('Falta el color');
      setSelectionModalDescription('Elegí el color que prefieras para poder continuar.');
      setSelectionModalOpen(true);
      return false;
    }

    if (!selectedSize) {
      setSelectionModalTitle('Falta el talle');
      setSelectionModalDescription('Seleccioná el talle para terminar tu compra.');
      setSelectionModalOpen(true);
      return false;
    }

    return true;
  };

  const handleAddToCart = () => {
    if (!validateSelection()) return;

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }

    setSelectionMessage(`${product.name} fue agregado al carrito.`);
    setCartOpen(true);
  };

  const handleBuyNow = () => {
    if (!validateSelection()) return;

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }

    navigate('/checkout');
  };

  const relatedProducts = allProducts
    .filter(p => p.category === product?.category && p.id !== product?.id)
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
                  key={selectedColor || selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={getImageForColor()}
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
                    className={`w-20 h-24 overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-foreground' : 'border-transparent'
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

                <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                    <Sparkles size={14} /> Envío rápido
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                    <Shield size={14} /> Pago seguro
                  </span>
                </div>

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
                        onClick={() => handleColorSelect(color.name)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
                          <Ruler size={16} /> Guía de talles
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Guía de talles</DialogTitle>
                          <DialogDescription>
                            Recomendamos medir tu prenda favorita y comparar con esta tabla para elegir el ajuste ideal.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                          <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
                            <h3 className="font-medium">Consejo de compra</h3>
                            <p className="text-sm text-muted-foreground">
                              Si te gusta un ajuste más relajado, subí un talle. Para una silueta más limpia, mantenete en tu medida habitual.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                              <CheckCircle2 size={16} className="text-accent" />
                              <span>Devoluciones simples si no te queda perfecto.</span>
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-xl border border-border">
                            <table className="min-w-full text-sm">
                              <thead className="bg-muted/60 text-left">
                                <tr>
                                  <th className="px-3 py-2 font-medium">Talle</th>
                                  <th className="px-3 py-2 font-medium">Ancho</th>
                                  <th className="px-3 py-2 font-medium">Largo</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t border-border">
                                  <td className="px-3 py-2">S</td>
                                  <td className="px-3 py-2">44 cm</td>
                                  <td className="px-3 py-2">64 cm</td>
                                </tr>
                                <tr className="border-t border-border">
                                  <td className="px-3 py-2">M</td>
                                  <td className="px-3 py-2">48 cm</td>
                                  <td className="px-3 py-2">66 cm</td>
                                </tr>
                                <tr className="border-t border-border">
                                  <td className="px-3 py-2">L</td>
                                  <td className="px-3 py-2">52 cm</td>
                                  <td className="px-3 py-2">68 cm</td>
                                </tr>
                                <tr className="border-t border-border">
                                  <td className="px-3 py-2">XL</td>
                                  <td className="px-3 py-2">56 cm</td>
                                  <td className="px-3 py-2">70 cm</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setSelectionMessage(null);
                        }}
                        className={`min-w-[48px] px-4 py-2 border text-sm font-medium transition-colors ${selectedSize === size
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border hover:border-foreground'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-border/70 bg-muted/30 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tu selección</span>
                    <span className="font-medium text-foreground">{selectedColor || 'Elige un color'}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Talle</span>
                    <span className="font-medium text-foreground">{selectedSize || 'Elige un talle'}</span>
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
                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
                    >
                      Agregar al Carrito
                    </button>
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-4 border transition-colors ${isWishlisted ? 'border-accent bg-accent/10' : 'border-border hover:border-foreground'
                        }`}
                    >
                      <Heart size={20} className={isWishlisted ? 'fill-accent text-accent' : ''} />
                    </button>
                    <button className="p-4 border border-border hover:border-foreground transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>

                  <button
                    onClick={handleBuyNow}
                    className="w-full py-4 border border-border bg-background text-foreground font-medium uppercase tracking-wider hover:bg-muted hover:text-foreground transition-colors"
                  >
                    Comprar ahora
                  </button>
                </div>

                {selectionMessage && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-accent">
                    <CheckCircle2 size={16} />
                    <span>{selectionMessage}</span>
                  </div>
                )}

                <Dialog open={selectionModalOpen} onOpenChange={setSelectionModalOpen}>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{selectionModalTitle}</DialogTitle>
                      <DialogDescription>{selectionModalDescription}</DialogDescription>
                    </DialogHeader>
                    <div className="rounded-xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Tu compra necesita estos datos:</p>
                      <ul className="mt-2 space-y-2">
                        <li>• Color seleccionado: {selectedColor || 'Aún no elegiste uno'}</li>
                        <li>• Talle seleccionado: {selectedSize || 'Aún no elegiste uno'}</li>
                      </ul>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setSelectionModalOpen(false)}
                        className="rounded-sm bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
                      >
                        Entendido
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Truck size={20} className="text-muted-foreground" />
                    <span>Envío gratis en compras mayores a $80.000</span>
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
