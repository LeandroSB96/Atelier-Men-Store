import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/useAdminAuth';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Package, label: 'Productos', path: '/admin/productos' },
    { icon: ShoppingCart, label: 'Órdenes', path: '/admin/ordenes' },
    { icon: BarChart3, label: 'Ventas', path: '/admin/ventas' },
    { icon: Settings, label: 'Configuración', path: '/admin/configuracion' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          'bg-slate-900 text-white transition-all duration-300 ease-in-out',
          sidebarOpen ? 'w-64' : 'w-20',
          'hidden md:flex md:flex-col border-r border-slate-800'
        )}
      >
        {/* Header del Sidebar */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Package className="h-5 w-5" />
              </div>
              <span className="font-bold text-sm">Atelier</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-slate-800 rounded transition-colors"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors relative group',
                  active
                    ? 'bg-primary text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                    {active && <ChevronRight className="h-4 w-4" />}
                  </>
                )}
                {!sidebarOpen && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer del Sidebar */}
        <div className="border-t border-slate-800 p-2">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={cn(
              'w-full text-slate-300 hover:text-white hover:bg-slate-800',
              !sidebarOpen && 'p-2 h-auto'
            )}
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2 text-sm">Cerrar sesión</span>}
          </Button>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-slate-900 text-white p-4 pt-16 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors',
                    active
                      ? 'bg-primary text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full text-slate-300 hover:text-white hover:bg-slate-800 justify-start"
            >
              <LogOut className="h-5 w-5 mr-2" />
              <span className="text-sm">Cerrar sesión</span>
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
          <h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
