import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Split layout */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-32">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 lg:pr-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <span className="inline-block text-taupe text-xs font-medium uppercase tracking-[0.4em]">
                Colección Primavera 2026
              </span>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] tracking-tight">
                Elegancia
                <br />
                <span className="text-taupe">Redefinida</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed font-light">
                Prendas diseñadas para el hombre contemporáneo. 
                Materiales nobles, cortes impecables y un estilo que trasciende.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/tienda"
                  className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all duration-500"
                >
                  Explorar Colección
                </Link>
                <Link
                  to="/novedades"
                  className="inline-flex items-center justify-center px-10 py-4 border border-foreground/20 text-foreground text-xs font-medium uppercase tracking-[0.2em] hover:border-foreground/40 transition-all duration-500"
                >
                  Novedades
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1200&q=90"
                alt="Colección masculina premium"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 bg-background p-6 shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Envío gratis</p>
              <p className="text-sm font-medium mt-1">En compras +$50.000</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
