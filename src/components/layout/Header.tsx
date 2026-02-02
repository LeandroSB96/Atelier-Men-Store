import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from '@/components/search/SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Tienda', href: '/tienda' },
    { name: 'Novedades', href: '/novedades' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="font-heading text-xl lg:text-2xl font-medium tracking-tight text-foreground">
                ATELIER
              </span>
            </Link>

            {/* Desktop navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-[0.12em]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 lg:gap-4 ml-auto">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Buscar"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => navigate('/cuenta')}
                className="hidden sm:flex p-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Mi cuenta"
              >
                <User size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 text-foreground hover:text-muted-foreground transition-colors"
                aria-label="Carrito"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-background text-[10px] font-medium flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/cuenta"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors py-2 flex items-center gap-2"
                >
                  <User size={16} />
                  Mi Cuenta
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
