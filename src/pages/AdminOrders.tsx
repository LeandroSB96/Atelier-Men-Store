import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, Search, AlertCircle } from 'lucide-react';
import { Order } from '@/types/admin';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Datos simulados de órdenes
const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Juan García',
    customerEmail: 'juan@example.com',
    customerPhone: '+34 912 345 678',
    items: [
      {
        productId: '1',
        productName: 'Remera Clásica',
        quantity: 2,
        price: 29.99,
        selectedSize: 'M',
        selectedColor: 'Negro',
      },
    ],
    totalAmount: 59.98,
    status: 'delivered',
    shippingAddress: {
      street: 'Calle Principal 123',
      city: 'Madrid',
      state: 'Madrid',
      zipCode: '28001',
      country: 'España',
    },
    billingAddress: {
      street: 'Calle Principal 123',
      city: 'Madrid',
      state: 'Madrid',
      zipCode: '28001',
      country: 'España',
    },
    paymentMethod: 'Tarjeta Crédito',
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-02-03'),
  },
  {
    id: 'ORD-002',
    customerName: 'María López',
    customerEmail: 'maria@example.com',
    customerPhone: '+34 912 345 679',
    items: [
      {
        productId: '2',
        productName: 'Pantalón Chino',
        quantity: 1,
        price: 49.99,
        selectedSize: 'L',
        selectedColor: 'Beige',
      },
    ],
    totalAmount: 49.99,
    status: 'shipped',
    shippingAddress: {
      street: 'Avenida Secundaria 456',
      city: 'Barcelona',
      state: 'Barcelona',
      zipCode: '08002',
      country: 'España',
    },
    billingAddress: {
      street: 'Avenida Secundaria 456',
      city: 'Barcelona',
      state: 'Barcelona',
      zipCode: '08002',
      country: 'España',
    },
    paymentMethod: 'PayPal',
    createdAt: new Date('2026-02-02'),
    updatedAt: new Date('2026-02-02'),
  },
  {
    id: 'ORD-003',
    customerName: 'Carlos Martínez',
    customerEmail: 'carlos@example.com',
    customerPhone: '+34 912 345 680',
    items: [
      {
        productId: '3',
        productName: 'Chamarra',
        quantity: 1,
        price: 99.99,
        selectedSize: 'XL',
        selectedColor: 'Azul',
      },
    ],
    totalAmount: 99.99,
    status: 'processing',
    shippingAddress: {
      street: 'Calle Tercera 789',
      city: 'Valencia',
      state: 'Valencia',
      zipCode: '46001',
      country: 'España',
    },
    billingAddress: {
      street: 'Calle Tercera 789',
      city: 'Valencia',
      state: 'Valencia',
      zipCode: '46001',
      country: 'España',
    },
    paymentMethod: 'Transferencia',
    createdAt: new Date('2026-02-03'),
    updatedAt: new Date('2026-02-03'),
  },
  {
    id: 'ORD-004',
    customerName: 'Ana Rodríguez',
    customerEmail: 'ana@example.com',
    customerPhone: '+34 912 345 681',
    items: [
      {
        productId: '1',
        productName: 'Remera Clásica',
        quantity: 3,
        price: 29.99,
        selectedSize: 'S',
        selectedColor: 'Blanco',
      },
    ],
    totalAmount: 89.97,
    status: 'pending',
    shippingAddress: {
      street: 'Plaza Mayor 321',
      city: 'Sevilla',
      state: 'Sevilla',
      zipCode: '41001',
      country: 'España',
    },
    billingAddress: {
      street: 'Plaza Mayor 321',
      city: 'Sevilla',
      state: 'Sevilla',
      zipCode: '41001',
      country: 'España',
    },
    paymentMethod: 'Tarjeta Débito',
    createdAt: new Date('2026-02-03'),
    updatedAt: new Date('2026-02-03'),
  },
];

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus as Order['status'], updatedAt: new Date() }
          : order
      )
    );
  };

  const getStatusBadge = (status: Order['status']) => {
    const variants: Record<Order['status'], 'default' | 'secondary' | 'destructive' | 'outline'> = {
      pending: 'default',
      processing: 'secondary',
      shipped: 'outline',
      delivered: 'default',
      cancelled: 'destructive',
    };

    const labels: Record<Order['status'], string> = {
      pending: 'Pendiente',
      processing: 'Procesando',
      shipped: 'Enviado',
      delivered: 'Entregado',
      cancelled: 'Cancelado',
    };

    return <Badge variant={variants[status]}>{labels[status]}</Badge>;
  };

  const pendingOrders = orders.filter((o) => o.status === 'pending').length;
  const processingOrders = orders.filter((o) => o.status === 'processing').length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Órdenes</h2>
          <p className="text-gray-600 mt-1">Gestiona todas las órdenes de tus clientes</p>
        </div>

        {/* Alerts */}
        {(pendingOrders > 0 || processingOrders > 0) && (
          <Card className="border-l-4 border-l-amber-500 bg-amber-50 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-amber-600 mt-1">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Órdenes pendientes</h3>
                  <p className="text-sm text-amber-800 mt-1">
                    Tienes {pendingOrders} órdenes pendientes y {processingOrders} en proceso.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar órdenes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="pending">Pendiente</SelectItem>
              <SelectItem value="processing">Procesando</SelectItem>
              <SelectItem value="shipped">Enviado</SelectItem>
              <SelectItem value="delivered">Entregado</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders Table */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow className="border-gray-200">
                  <TableHead className="text-gray-700 font-semibold">ID Orden</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Cliente</TableHead>
                  <TableHead className="text-gray-700 font-semibold text-right">Monto</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Estado</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Fecha</TableHead>
                  <TableHead className="text-gray-700 font-semibold text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow
                      key={order.id}
                      className="border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-900">{order.id}</TableCell>
                      <TableCell>
                        <div className="text-gray-900 font-medium">{order.customerName}</div>
                        <div className="text-xs text-gray-600">{order.customerEmail}</div>
                      </TableCell>
                      <TableCell className="text-right text-gray-900 font-semibold">
                        ${order.totalAmount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Select
                          value={order.status}
                          onValueChange={(value) =>
                            handleStatusChange(order.id, value)
                          }
                        >
                          <SelectTrigger className="w-32 h-8 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pendiente</SelectItem>
                            <SelectItem value="processing">Procesando</SelectItem>
                            <SelectItem value="shipped">Enviado</SelectItem>
                            <SelectItem value="delivered">Entregado</SelectItem>
                            <SelectItem value="cancelled">Cancelado</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {order.createdAt.toLocaleDateString('es-ES')}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedOrder(order)}
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <div className="flex flex-col items-center gap-2 text-gray-500">
                        <AlertCircle className="h-8 w-8" />
                        <p>No hay órdenes que coincidan con tu búsqueda</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <CardContent className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600">
              Total: <span className="font-semibold">{filteredOrders.length}</span> órdenes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalles de la Orden {selectedOrder?.id}</DialogTitle>
            <DialogDescription>Información completa de la orden y cliente</DialogDescription>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase">Nombre</p>
                  <p className="text-sm text-gray-900 mt-1">{selectedOrder.customerName}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase">Email</p>
                  <p className="text-sm text-gray-900 mt-1">{selectedOrder.customerEmail}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase">Teléfono</p>
                  <p className="text-sm text-gray-900 mt-1">{selectedOrder.customerPhone}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase">Estado</p>
                  <div className="mt-1">{getStatusBadge(selectedOrder.status)}</div>
                </div>
              </div>

              {/* Items */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Productos</h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{item.productName}</p>
                        <p className="text-xs text-gray-600">
                          Talla: {item.selectedSize} | Color: {item.selectedColor}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-600">x{item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Dirección de Envío</h4>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-900">
                    {selectedOrder.shippingAddress.street}
                  </p>
                  <p className="text-sm text-gray-900">
                    {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}{' '}
                    {selectedOrder.shippingAddress.zipCode}
                  </p>
                  <p className="text-sm text-gray-900">{selectedOrder.shippingAddress.country}</p>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${selectedOrder.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default OrdersPage;
