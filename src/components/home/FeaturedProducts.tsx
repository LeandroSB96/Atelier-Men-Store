import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-taupe text-xs font-medium uppercase tracking-[0.3em]">
              Selección
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-medium mt-4 tracking-tight">
              Productos Destacados
            </h2>
          </div>
          <Link
            to="/tienda"
            className="text-xs font-medium text-foreground uppercase tracking-[0.2em] hover:text-muted-foreground transition-colors duration-300"
          >
            Ver Todo →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
