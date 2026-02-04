import React, { useMemo } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Datos de ventas mensuales
const monthlySalesData = [
  { month: 'Enero', revenue: 4000, orders: 24, customers: 18 },
  { month: 'Febrero', revenue: 3000, orders: 18, customers: 14 },
  { month: 'Marzo', revenue: 2000, orders: 12, customers: 10 },
  { month: 'Abril', revenue: 2780, orders: 16, customers: 12 },
  { month: 'Mayo', revenue: 1890, orders: 11, customers: 9 },
  { month: 'Junio', revenue: 2390, orders: 14, customers: 11 },
];

// Datos de productos más vendidos
const topProductsSalesData = [
  { name: 'Remera Essential Algodón', revenue: 3200, units: 107, growth: 12 },
  { name: 'Pantalón Chino Slim', revenue: 2800, units: 56, growth: 8 },
  { name: 'Remera Oversize Premium', revenue: 2400, units: 80, growth: 15 },
  { name: 'Jean Straight Premium', revenue: 2100, units: 21, growth: 5 },
  { name: 'Camisa Oxford Clásica', revenue: 1800, units: 72, growth: 10 },
];

// Datos por categoría
const categoryRevenueData = [
  { category: 'Remeras', revenue: 5600, percentage: 38 },
  { category: 'Pantalones', revenue: 3400, percentage: 23 },
  { category: 'Camisas', revenue: 2900, percentage: 20 },
  { category: 'Accesorios', revenue: 2100, percentage: 14 },
  { category: 'Otros', revenue: 1000, percentage: 5 },
];

// Datos de conversión
const conversionData = [
  { date: '1 Feb', visitors: 1200, cartAdds: 240, conversions: 48, conversionRate: 4.0 },
  { date: '2 Feb', visitors: 1400, cartAdds: 350, conversions: 56, conversionRate: 4.0 },
  { date: '3 Feb', visitors: 1600, cartAdds: 480, conversions: 96, conversionRate: 6.0 },
  { date: '4 Feb', visitors: 1500, cartAdds: 425, conversions: 75, conversionRate: 5.0 },
  { date: '5 Feb', visitors: 1800, cartAdds: 540, conversions: 108, conversionRate: 6.0 },
  { date: '6 Feb', visitors: 1650, cartAdds: 495, conversions: 99, conversionRate: 6.0 },
  { date: '7 Feb', visitors: 1900, cartAdds: 570, conversions: 133, conversionRate: 7.0 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

const SalesPage: React.FC = () => {
  const stats = useMemo(() => {
    const totalRevenue = monthlySalesData.reduce((sum, month) => sum + month.revenue, 0);
    const totalOrders = monthlySalesData.reduce((sum, month) => sum + month.orders, 0);
    const totalCustomers = monthlySalesData.reduce((sum, month) => sum + month.customers, 0);
    const totalVisitors = conversionData.reduce((sum, day) => sum + day.visitors, 0);
    const totalConversions = conversionData.reduce((sum, day) => sum + day.conversions, 0);
    const conversionRate = ((totalConversions / totalVisitors) * 100).toFixed(2);

    return {
      totalRevenue,
      totalOrders,
      totalCustomers,
      avgOrderValue: (totalRevenue / totalOrders).toFixed(2),
      totalVisitors,
      conversionRate,
    };
  }, []);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const StatBox = ({
    icon,
    label,
    value,
    change,
    changeType,
  }: {
    icon: string;
    label: string;
    value: string | number;
    change?: number;
    changeType?: 'increase' | 'decrease';
  }) => (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 font-medium">{label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
            {change !== undefined && (
              <p
                className={`text-xs mt-2 flex items-center gap-1 ${
                  changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {changeType === 'increase' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {change > 0 ? '+' : ''}{change}% vs mes anterior
              </p>
            )}
          </div>
          <div className="text-2xl">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Análisis de Ventas</h2>
          <p className="text-gray-600 mt-1">Visualiza tus métricas de ventas y rendimiento</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox
            icon="💰"
            label="Ingresos Totales"
            value={formatPrice(stats.totalRevenue)}
            change={12}
            changeType="increase"
          />
          <StatBox
            icon="📦"
            label="Órdenes Totales"
            value={stats.totalOrders}
            change={8}
            changeType="increase"
          />
          <StatBox
            icon="👥"
            label="Clientes"
            value={stats.totalCustomers}
            change={5}
            changeType="increase"
          />
          <StatBox
            icon="💳"
            label="Ticket Promedio"
            value={formatPrice(Number(stats.avgOrderValue))}
            change={3}
            changeType="increase"
          />
        </div>

        {/* Revenue Trend Chart */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Tendencia de Ingresos</CardTitle>
            <CardDescription>Últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlySalesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  formatter={(value) => formatPrice(Number(value))}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  name="Ingresos"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders & Customers */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Órdenes y Clientes</CardTitle>
              <CardDescription>Últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="orders" fill="#8b5cf6" name="Órdenes" />
                  <Bar dataKey="customers" fill="#ec4899" name="Clientes Nuevos" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Ingresos por Categoría</CardTitle>
              <CardDescription>Distribución</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryRevenueData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, percentage }) => `${category} ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="revenue"
                  >
                    {categoryRevenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatPrice(Number(value))} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Rate */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Tasa de Conversión</CardTitle>
            <CardDescription>Últimos 7 días</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="conversionRate"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: '#10b981' }}
                  name="Tasa de Conversión (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Productos Más Vendidos</CardTitle>
            <CardDescription>Top 5 por ingresos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProductsSalesData.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-600">
                      {product.units} unidades vendidas
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{formatPrice(product.revenue)}</p>
                    <p className="text-xs text-green-600 flex items-center justify-end gap-1 mt-1">
                      <TrendingUp className="h-3 w-3" />
                      +{product.growth}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default SalesPage;