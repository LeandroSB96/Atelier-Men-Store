import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 lg:px-12">
        {/* Full width editorial banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=1600&q=90"
            alt="Ofertas de temporada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-xl px-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-block text-background/80 text-xs font-medium uppercase tracking-[0.4em] mb-4"
              >
                Oferta Exclusiva
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-heading text-3xl md:text-5xl font-medium text-background mb-6"
              >
                Hasta 40% de Descuento
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/ofertas"
                  className="inline-flex items-center justify-center px-10 py-4 bg-background text-foreground text-xs font-medium uppercase tracking-[0.2em] hover:bg-background/90 transition-all duration-500"
                >
                  Comprar Ahora
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Two column grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=90"
              alt="Nueva colección"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-background/80 text-xs font-medium uppercase tracking-[0.3em]">
                Recién Llegados
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-background mt-2">
                Novedades
              </h3>
              <Link
                to="/novedades"
                className="inline-flex items-center mt-4 text-background text-xs uppercase tracking-[0.2em] hover:underline"
              >
                Explorar →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=90"
              alt="Esenciales"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-background/80 text-xs font-medium uppercase tracking-[0.3em]">
                Básicos Premium
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-background mt-2">
                Esenciales
              </h3>
              <Link
                to="/tienda"
                className="inline-flex items-center mt-4 text-background text-xs uppercase tracking-[0.2em] hover:underline"
              >
                Explorar →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
