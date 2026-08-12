import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CreditCard, Banknote, Smartphone, Check, Coins } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { useCart } from '@/context/CartContext';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>('cart');
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardData, setCardData] = useState({
    holderName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [paymentError, setPaymentError] = useState('');
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [step]);

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.match(/.{1,4}/g)?.join(' ') || digits;
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  const isCardDataValid = () => {
    const { holderName, cardNumber, expiry, cvv } = cardData;
    if (!holderName || !cardNumber || !expiry || !cvv) {
      setPaymentError('Completa todos los campos de la tarjeta.');
      return false;
    }
    if (cardNumber.replace(/\s/g, '').length !== 16) {
      setPaymentError('El número de tarjeta debe tener 16 dígitos.');
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setPaymentError('El vencimiento debe tener el formato MM/YY.');
      return false;
    }
    if (!/^[0-9]{3,4}$/.test(cvv)) {
      setPaymentError('El CVV debe tener 3 o 4 dígitos.');
      return false;
    }
    setPaymentError('');
    return true;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price);
  };

  const shippingCost = totalPrice > 80000 ? 0 : 5000;
  const finalTotal = totalPrice + shippingCost;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentMethod) {
      setPaymentError('Selecciona un método de pago para continuar.');
      return;
    }

    if (paymentMethod === 'card' && !isCardDataValid()) {
      return;
    }

    setPaymentError('');
    const order = 'AT-' + Math.random().toString(36).substring(2, 11).toUpperCase();
    setOrderNumber(order);
    clearCart();
    setStep('confirmation');
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl mb-4">Tu carrito está vacío</h1>
          <Link to="/tienda" className="text-accent hover:underline">
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20 md:pt-24 pb-16">
        <div className="container px-4">
          <div className="mb-8 rounded-2xl border border-border bg-card/80 p-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>Compra protegida con devoluciones simples en 30 días.</span>
              <span className="font-medium text-foreground">Envío gratis desde $80.000</span>
            </div>
          </div>
          {/* Back button */}
          {step !== 'confirmation' && (
            <button
              onClick={() => {
                if (step === 'cart') navigate(-1);
                else if (step === 'shipping') setStep('cart');
                else if (step === 'payment') setStep('shipping');
              }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ChevronLeft size={18} />
              Volver
            </button>
          )}

          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {(['cart', 'shipping', 'payment', 'confirmation'] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${step === s || (step === 'confirmation' && s !== 'confirmation') ? 'text-foreground' : 'text-muted-foreground'}`}>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === s ? 'bg-accent text-accent-foreground' :
                    (['shipping', 'payment', 'confirmation'].indexOf(step) > ['cart', 'shipping', 'payment', 'confirmation'].indexOf(s))
                      ? 'bg-foreground text-background' : 'bg-muted'
                  }`}>
                    {(['shipping', 'payment', 'confirmation'].indexOf(step) > ['cart', 'shipping', 'payment', 'confirmation'].indexOf(s)) ? <Check size={16} /> : i + 1}
                  </span>
                  <span className="hidden md:inline text-sm font-medium capitalize">
                    {s === 'cart' ? 'Carrito' : s === 'shipping' ? 'Envío' : s === 'payment' ? 'Pago' : 'Confirmación'}
                  </span>
                </div>
                {i < 3 && <div className="w-8 md:w-16 h-px bg-border" />}
              </div>
            ))}
          </div>

          <div className={`grid gap-8 ${step === 'confirmation' ? '' : 'lg:grid-cols-3'}`}>
            {/* Main content */}
            <div className={step === 'confirmation' ? 'lg:col-span-3' : 'lg:col-span-2'}>
              {step === 'cart' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h1 className="font-heading text-2xl font-semibold mb-6">Resumen del Carrito</h1>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4 bg-card rounded-sm">
                        <img src={item.product.images[0]} alt={item.product.name} className="w-24 h-28 object-cover" />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Talle: {item.selectedSize} | Color: {item.selectedColor}
                          </p>
                          <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                          <p className="font-semibold mt-2">{formatPrice(item.product.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep('shipping')}
                    className="w-full mt-6 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90"
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {step === 'shipping' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h1 className="font-heading text-2xl font-semibold mb-6">Datos de Envío</h1>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Nombre *</label>
                        <input
                          type="text"
                          required
                          value={shippingData.firstName}
                          onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Apellido *</label>
                        <input
                          type="text"
                          required
                          value={shippingData.lastName}
                          onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email *</label>
                        <input
                          type="email"
                          required
                          value={shippingData.email}
                          onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Teléfono *</label>
                        <input
                          type="tel"
                          required
                          value={shippingData.phone}
                          onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Dirección *</label>
                      <input
                        type="text"
                        required
                        value={shippingData.address}
                        onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                        className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Ciudad *</label>
                        <input
                          type="text"
                          required
                          value={shippingData.city}
                          onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Provincia *</label>
                        <input
                          type="text"
                          required
                          value={shippingData.province}
                          onChange={(e) => setShippingData({ ...shippingData, province: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Código Postal *</label>
                        <input
                          type="text"
                          required
                          value={shippingData.postalCode}
                          onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Notas (opcional)</label>
                      <textarea
                        value={shippingData.notes}
                        onChange={(e) => setShippingData({ ...shippingData, notes: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90"
                    >
                      Continuar al Pago
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 'payment' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h1 className="font-heading text-2xl font-semibold mb-6">Método de Pago</h1>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="space-y-4 mb-6">
                      {[
                        { id: 'card', name: 'Tarjeta de Crédito/Débito', icon: CreditCard },
                        { id: 'debit', name: 'Débito', icon: CreditCard },
                        { id: 'transfer', name: 'Transferencia Bancaria', icon: Banknote },
                        { id: 'mercadopago', name: 'MercadoPago', icon: Smartphone },
                        { id: 'cash', name: 'Efectivo', icon: Coins }
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => {
                            setPaymentMethod(method.id);
                            setPaymentError('');
                            if (method.id !== 'card') {
                              setCardData({ holderName: '', cardNumber: '', expiry: '', cvv: '' });
                            }
                          }}
                          className={`w-full flex items-center gap-4 p-4 border rounded-sm transition-colors ${
                            paymentMethod === method.id ? 'border-accent bg-accent/5' : 'border-border hover:border-muted-foreground'
                          }`}
                        >
                          <method.icon size={24} className={paymentMethod === method.id ? 'text-accent' : 'text-muted-foreground'} />
                          <span className="font-medium">{method.name}</span>
                          {paymentMethod === method.id && <Check size={20} className="ml-auto text-accent" />}
                        </button>
                      ))}
                    </div>

                    {paymentMethod === 'card' && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-6 p-6 border border-border rounded-sm bg-card">
                      <h2 className="font-semibold text-lg">Datos de la Tarjeta</h2>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Titular de la Tarjeta *</label>
                        <input
                          type="text"
                          placeholder="Juan Pérez"
                          value={cardData.holderName}
                          onChange={(e) => setCardData({ ...cardData, holderName: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Número de Tarjeta *</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9101 1121"
                          maxLength={19}
                          value={cardData.cardNumber}
                          onChange={(e) => setCardData({ ...cardData, cardNumber: formatCardNumber(e.target.value) })}
                          className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Vencimiento (MM/YY) *</label>
                          <input
                            type="text"
                            placeholder="12/25"
                            maxLength={5}
                            value={cardData.expiry}
                            onChange={(e) => setCardData({ ...cardData, expiry: formatExpiry(e.target.value) })}
                            className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">CVV *</label>
                          <input
                            type="text"
                            placeholder="123"
                            maxLength={4}
                            value={cardData.cvv}
                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '') })}
                            className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent font-mono"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {paymentMethod === 'transfer' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-6 p-6 border border-border rounded-sm bg-card/50">
                      <h2 className="font-semibold text-lg">Datos de Transferencia</h2>
                      <p className="text-sm text-muted-foreground">Te enviaremos los datos bancarios por email para que realices la transferencia.</p>
                      <p className="text-sm text-muted-foreground">El pedido se confirmará una vez recibida la transferencia.</p>
                    </motion.div>
                  )}

                  {paymentMethod === 'debit' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-6 p-6 border border-border rounded-sm bg-card/50">
                      <h2 className="font-semibold text-lg">Pago con Débito</h2>
                      <p className="text-sm text-muted-foreground">Podrás completar el pago desde tu banco o app de pagos habilitada.</p>
                      <p className="text-sm text-muted-foreground">El pedido se procesará una vez confirmada la operación.</p>
                    </motion.div>
                  )}

                  {paymentMethod === 'cash' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-6 p-6 border border-border rounded-sm bg-card/50">
                      <h2 className="font-semibold text-lg">Pago en Efectivo</h2>
                      <p className="text-sm text-muted-foreground">El pedido se confirma y podrás abonar el total al recibir tu compra.</p>
                      <p className="text-sm text-muted-foreground">Te enviaremos los datos de entrega y el monto final una vez finalizado el proceso.</p>
                    </motion.div>
                  )}

                  {paymentMethod === 'mercadopago' && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 mb-6 p-6 border border-border rounded-sm bg-card/50">
                      <h2 className="font-semibold text-lg">Pago con MercadoPago</h2>
                      <p className="text-sm text-muted-foreground">Serás redirigido a MercadoPago para completar el pago de forma segura.</p>
                    </motion.div>
                  )}

                  {paymentError && (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {paymentError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent text-accent-foreground font-medium uppercase tracking-wider hover:bg-accent/90"
                  >
                    Confirmar Pedido
                  </button>
                </form>
              </motion.div>
              )}

              {step === 'confirmation' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16">
                  <div className="flex flex-col items-center justify-center text-center">
                    <motion.div 
                      className="w-24 h-24 mb-8 rounded-full bg-accent/10 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    >
                      <Check size={48} className="text-accent" />
                    </motion.div>
                    <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">¡Pedido Confirmado!</h1>
                    <p className="text-muted-foreground text-lg mb-6">Gracias por tu compra</p>
                    
                    <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 mb-8">
                      <p className="text-sm text-muted-foreground mb-2">Número de pedido</p>
                      <p className="font-mono text-xl font-semibold text-accent">{orderNumber}</p>
                    </div>

                    <p className="text-muted-foreground max-w-md mb-8">
                      Recibirás un email con los detalles de tu pedido, comprobante de pago e información de seguimiento de envío.
                    </p>

                    <div className="flex flex-col gap-3 w-full max-w-xs">
                      <Link
                        to="/tienda"
                        className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90 rounded-sm"
                      >
                        Seguir Comprando
                      </Link>
                      <Link
                        to="/"
                        className="inline-block px-6 py-3 border border-border text-foreground font-medium uppercase tracking-wider hover:bg-muted rounded-sm"
                      >
                        Volver al Inicio
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Order summary */}
            {(step !== 'confirmation' && items.length > 0) && (
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card p-6 rounded-sm">
                  <h2 className="font-heading text-lg font-semibold mb-4">Resumen del Pedido</h2>
                  <div className="space-y-3 pb-4 border-b border-border">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.product.name} x{item.quantity}
                        </span>
                        <span>{formatPrice(item.product.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 py-4 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Envío</span>
                      <span>{shippingCost === 0 ? 'Gratis' : formatPrice(shippingCost)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-semibold">{formatPrice(finalTotal)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
