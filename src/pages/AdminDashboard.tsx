import React, { useMemo } from 'react';
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
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Package, ShoppingCart, DollarSign } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { products } from '@/data/products';

// Datos simulados para ventas
const dailySalesData = [
  { date: '1 Feb', revenue: 2400, orders: 8 },
  { date: '2 Feb', revenue: 1398, orders: 5 },
  { date: '3 Feb', revenue: 3800, orders: 12 },
  { date: '4 Feb', revenue: 3908, orders: 10 },
  { date: '5 Feb', revenue: 4800, orders: 14 },
  { date: '6 Feb', revenue: 3490, orders: 9 },
  { date: '7 Feb', revenue: 4300, orders: 11 },
];

const topProductsData = [
  { name: 'Remera Clásica', sales: 45, revenue: 1800 },
  { name: 'Remera Oversized', sales: 38, revenue: 2280 },
  { name: 'Pantalón Chino', sales: 32, revenue: 2240 },
  { name: 'Chamarra', sales: 28, revenue: 2800 },
  { name: 'Camiseta Premium', sales: 25, revenue: 1500 },
];

const categoryData = [
  { name: 'Remeras', value: 35 },
  { name: 'Pantalones', value: 25 },
  { name: 'Chamarra', value: 20 },
  { name: 'Accesorios', value: 20 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];

const Dashboard: React.FC = () => {
  const stats = useMemo(() => {
    const totalRevenue = dailySalesData.reduce((sum, day) => sum + day.revenue, 0);
    const totalOrders = dailySalesData.reduce((sum, day) => sum + day.orders, 0);
    const lowStockProducts = products.filter((p) => p.stock < 10).length;

    return {
      totalRevenue,
      totalOrders,
      averageOrderValue: Math.round(totalRevenue / totalOrders),
      totalProducts: products.length,
      lowStockProducts,
    };
  }, []);

  const StatCard = ({
    icon: Icon,
    label,
    value,
    color,
    trend,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    color: string;
    trend?: number;
  }) => (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 font-medium">{label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
            {trend !== undefined && (
              <p className={`text-xs mt-2 flex items-center gap-1 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                <TrendingUp className="h-3 w-3" />
                {trend > 0 ? '+' : ''}{trend}% vs semana anterior
              </p>
            )}
          </div>
          <div className={`${color} p-4 rounded-xl`}>
            {Icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Bienvenido al Dashboard</h2>
          <p className="text-gray-600 mt-2">Aquí encontrarás un resumen de tu tienda</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<DollarSign className="h-6 w-6 text-white" />}
            label="Ingresos Totales"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            color="bg-blue-500"
            trend={12}
          />
          <StatCard
            icon={<ShoppingCart className="h-6 w-6 text-white" />}
            label="Órdenes"
            value={stats.totalOrders}
            color="bg-purple-500"
            trend={8}
          />
          <StatCard
            icon={<Package className="h-6 w-6 text-white" />}
            label="Productos"
            value={stats.totalProducts}
            color="bg-pink-500"
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-white" />}
            label="Ticket Promedio"
            value={`$${stats.averageOrderValue}`}
            color="bg-amber-500"
            trend={5}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart - Ventas por día */}
          <Card className="lg:col-span-2 border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Ventas Diarias</CardTitle>
              <CardDescription>Últimos 7 días</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailySalesData}>
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
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Ingresos ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart - Categorías */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Ventas por Categoría</CardTitle>
              <CardDescription>Distribución</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Productos Más Vendidos</CardTitle>
            <CardDescription>Top 5 productos</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProductsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" name="Unidades Vendidas" />
                <Bar dataKey="revenue" fill="#8b5cf6" name="Ingresos ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Alertas */}
        <Card className="border-l-4 border-l-amber-500 bg-amber-50 border-0">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-amber-600 mt-1">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-900">Productos con bajo stock</h3>
                <p className="text-sm text-amber-800 mt-1">
                  {stats.lowStockProducts} productos tienen menos de 10 unidades en stock. Considera hacer un nuevo pedido.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
