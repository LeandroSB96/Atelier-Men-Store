import { motion } from 'framer-motion';
import { getNewProducts } from '@/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/product/ProductCard';

const NewArrivals = () => {
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
              alt="Novedades"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-gold text-sm font-medium uppercase tracking-[0.3em] mb-4"
            >
              Recién llegados
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-6xl font-semibold text-cream"
            >
              Novedades
            </motion.h1>
          </div>
        </section>

        {/* Products */}
        <section className="container px-4 py-16">
          <p className="text-muted-foreground mb-8">{newProducts.length} productos nuevos</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewArrivals;
