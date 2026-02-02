import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, totalPrice } = useCart();

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
            transition={{ duration: 0.3 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-foreground/40 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xs font-medium uppercase tracking-[0.2em]">Carrito ({items.length})</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-muted-foreground text-sm mb-4">Tu carrito está vacío</p>
                  <Link
                    to="/tienda"
                    onClick={() => setCartOpen(false)}
                    className="text-xs font-medium uppercase tracking-[0.15em] underline underline-offset-4"
                  >
                    Explorar productos
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-4"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-24 h-28 object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-normal">{item.product.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.selectedSize} / {item.selectedColor}
                        </p>
                        <p className="text-sm font-medium mt-2">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-border">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor,
                                  item.quantity - 1
                                )
                              }
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.selectedSize,
                                  item.selectedColor,
                                  item.quantity + 1
                                )
                              }
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.selectedSize, item.selectedColor)
                            }
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-lg font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Envío calculado en el checkout
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="block w-full py-4 bg-foreground text-background text-center text-xs font-medium uppercase tracking-[0.15em] hover:bg-foreground/90 transition-colors"
                >
                  Finalizar Compra
                </Link>
                <button
                  onClick={() => setCartOpen(false)}
                  className="block w-full py-4 border border-border text-foreground text-center text-xs font-medium uppercase tracking-[0.15em] hover:bg-secondary transition-colors"
                >
                  Seguir Comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
