import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte!');
    setEmail('');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-medium tracking-tight">ATELIER</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mt-4 max-w-xs">
              Moda masculina de calidad premium. Diseño atemporal para el hombre moderno.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 text-background/60 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="p-2 text-background/60 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6">Tienda</h4>
            <ul className="space-y-3">
              {['Remeras', 'Camisas', 'Pantalones', 'Jeans', 'Calzado', 'Accesorios'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/tienda?categoria=${item.toLowerCase()}`}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6">Información</h4>
            <ul className="space-y-3">
              {[
                { name: 'Sobre Nosotros', href: '/nosotros' },
                { name: 'Contacto', href: '/contacto' },
                { name: 'Envíos', href: '#' },
                { name: 'Devoluciones', href: '#' },
                { name: 'Guía de Talles', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] mb-6">Newsletter</h4>
            <p className="text-sm text-background/60 mb-4">
              Suscríbete y recibe un 10% de descuento en tu primera compra.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                required
                className="w-full px-4 py-3 bg-transparent border border-background/20 text-sm placeholder:text-background/40 focus:outline-none focus:border-background/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-background text-foreground text-xs font-medium uppercase tracking-[0.15em] hover:bg-background/90 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>© 2026 Atelier. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            {/* Visa */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
              <rect width="48" height="32" rx="4" fill="white"/>
              <path d="M19.5 21.5H16.5L18.5 10.5H21.5L19.5 21.5Z" fill="#1434CB"/>
              <path d="M28.5 10.7C27.9 10.5 27 10.2 25.9 10.2C23 10.2 21 11.7 21 13.8C21 15.4 22.5 16.2 23.6 16.7C24.8 17.2 25.2 17.6 25.2 18.1C25.2 18.9 24.2 19.3 23.3 19.3C22 19.3 21.3 19.1 20.2 18.6L19.7 18.4L19.2 21.4C20 21.8 21.4 22.1 22.9 22.1C26 22.1 27.9 20.6 27.9 18.4C27.9 17.1 27.1 16.1 25.4 15.3C24.4 14.8 23.8 14.5 23.8 13.9C23.8 13.4 24.4 12.8 25.6 12.8C26.6 12.8 27.3 13 27.9 13.3L28.2 13.4L28.5 10.7Z" fill="#1434CB"/>
              <path d="M33.5 10.5H31.2C30.5 10.5 30 10.7 29.7 11.4L25.5 21.5H28.6L29.2 19.8H33L33.4 21.5H36.2L33.5 10.5ZM30.1 17.5C30.4 16.7 31.5 13.8 31.5 13.8C31.5 13.8 31.8 13 32 12.4L32.2 13.7C32.2 13.7 32.9 16.9 33.1 17.5H30.1Z" fill="#1434CB"/>
              <path d="M14.5 10.5L11.6 18L11.3 16.5C10.7 14.6 9 12.5 7 11.4L9.6 21.5H12.7L17.6 10.5H14.5Z" fill="#1434CB"/>
              <path d="M9.5 10.5H5L5 10.7C8.6 11.6 11 14.1 11.8 16.5L10.9 11.4C10.8 10.7 10.3 10.5 9.5 10.5Z" fill="#F9A533"/>
            </svg>
            {/* Mastercard */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
              <rect width="48" height="32" rx="4" fill="white"/>
              <circle cx="19" cy="16" r="8" fill="#EB001B"/>
              <circle cx="29" cy="16" r="8" fill="#F79E1B"/>
              <path d="M24 10.3C25.9 11.8 27.1 14.2 27.1 16.9C27.1 19.6 25.9 22 24 23.5C22.1 22 20.9 19.6 20.9 16.9C20.9 14.2 22.1 11.8 24 10.3Z" fill="#FF5F00"/>
            </svg>
            {/* MercadoPago */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
              <rect width="48" height="32" rx="4" fill="white"/>
              <path d="M24 8C17.4 8 12 13.4 12 20C12 20.7 12.1 21.4 12.2 22H35.8C35.9 21.4 36 20.7 36 20C36 13.4 30.6 8 24 8Z" fill="#009EE3"/>
              <path d="M18 16C18 14.3 19.3 13 21 13H27C28.7 13 30 14.3 30 16V20C30 21.7 28.7 23 27 23H21C19.3 23 18 21.7 18 20V16Z" fill="white"/>
              <circle cx="24" cy="18" r="2" fill="#009EE3"/>
            </svg>
            {/* American Express */}
            <svg className="h-8 w-auto" viewBox="0 0 48 32" fill="none">
              <rect width="48" height="32" rx="4" fill="#006FCF"/>
              <path d="M8 20H11L11.5 18.5H13.5L14 20H20V18.5L20.5 20H23.5L24 18.5V20H40V12H24L23.5 13.5L23 12H20V13.5L19.5 12H14L13 14.5L12 12H8V20Z" fill="white"/>
              <path d="M9 19V13H11L12.5 17L14 13H16V19H14.5V14.5L13 19H12L10.5 14.5V19H9Z" fill="#006FCF"/>
              <path d="M17 19V13H21.5V14.5H18.5V15.5H21.5V17H18.5V17.5H21.5V19H17Z" fill="#006FCF"/>
              <path d="M26 19L28.5 13H30.5L33 19H31L30.5 18H28.5L28 19H26ZM29 14.5L28.5 16.5H30.5L30 14.5H29Z" fill="#006FCF"/>
              <path d="M34 19V13H36L38.5 17V13H40V19H38L35.5 15V19H34Z" fill="#006FCF"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
