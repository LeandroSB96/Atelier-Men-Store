import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
              alt="Sobre nosotros"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-6xl font-semibold text-cream"
            >
              Nuestra Historia
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="container px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                <span className="text-foreground font-heading text-2xl">Atelier</span> nació en 2020 con una visión clara: 
                redefinir la moda masculina en Argentina, ofreciendo prendas de calidad excepcional 
                que combinan diseño atemporal con comodidad contemporánea.
              </p>
              <p>
                Cada pieza de nuestra colección es cuidadosamente seleccionada, priorizando materiales 
                premium y técnicas de confección artesanal. Trabajamos con los mejores proveedores 
                locales e internacionales para garantizar que cada prenda cumpla con nuestros 
                exigentes estándares de calidad.
              </p>
              <p>
                Nuestra filosofía se basa en el concepto de "menos es más". Creemos en construir 
                un guardarropa duradero con piezas versátiles que trasciendan las tendencias 
                pasajeras y se conviertan en clásicos personales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-card py-16 md:py-24">
          <div className="container px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12"
            >
              Nuestros Valores
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Calidad',
                  description: 'Seleccionamos únicamente los mejores materiales y trabajamos con artesanos expertos.'
                },
                {
                  title: 'Sostenibilidad',
                  description: 'Priorizamos prácticas responsables y producciones conscientes con el medio ambiente.'
                },
                {
                  title: 'Atemporalidad',
                  description: 'Diseñamos prendas que trascienden las modas y perduran en el tiempo.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image grid */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                  alt="Atelier workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800"
                  alt="Atelier fabrics"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
