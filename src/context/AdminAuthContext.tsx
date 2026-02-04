import React, { useState, useEffect } from 'react';
import { AdminUser } from '@/types/admin';
import { AuthContext, AuthContextType } from './AuthContext';

// Usuarios admin predefinidos (en producción usar una base de datos)
const ADMIN_USERS: AdminUser[] = [
  {
    id: '1',
    email: 'admin@ateliermen.com',
    password: 'admin123', // En producción: hashear contraseña
    role: 'super_admin',
    createdAt: new Date(),
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay sesión almacenada
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('adminUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simular autenticación (en producción hacer llamada a API)
      const adminUser = ADMIN_USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (!adminUser) {
        throw new Error('Email o contraseña inválidos');
      }

      const { password: _, ...userWithoutPassword } = adminUser;
      setUser(userWithoutPassword as AdminUser);
      localStorage.setItem('adminUser', JSON.stringify(userWithoutPassword));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// NOTE: `useAuth` hook is exported from a separate file to keep this file
// exporting only the provider component (improves Fast Refresh behavior).
