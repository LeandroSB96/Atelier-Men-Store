import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="bg-card py-12 md:py-16 border-b border-border">
          <div className="container px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl font-semibold"
            >
              Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-4 max-w-lg mx-auto"
            >
              ¿Tenés alguna consulta? Estamos aquí para ayudarte. 
              Completá el formulario o contactanos directamente.
            </motion.p>
          </div>
        </section>

        <section className="container px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-semibold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-card rounded-sm">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Dirección</h3>
                      <p className="text-muted-foreground">Av. Santa Fe 1234, Piso 3<br />Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-card rounded-sm">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+54 11 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-card rounded-sm">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">hola@atelier.com.ar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-card rounded-sm">
                      <Clock size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horario de Atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 18:00<br />Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-card rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                  alt="Map"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-heading text-2xl font-semibold mb-6">Envianos un mensaje</h2>
              
              {submitted ? (
                <div className="p-8 bg-accent/10 rounded-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-accent hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nombre *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Asunto *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="consulta">Consulta general</option>
                      <option value="pedido">Sobre mi pedido</option>
                      <option value="devolucion">Devoluciones y cambios</option>
                      <option value="colaboracion">Colaboración</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Mensaje *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-border bg-background rounded-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
