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
import { useOrders } from '@/hooks/useOrders';
import { Badge } from '@/components/ui/badge';

type OrderStatus = 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

interface DisplayOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: string;
  paymentMethod: string;
  shippingStreet: string;
  shippingCity: string;
  shippingZipCode: string;
  createdAt: string;
  items: {
    productName: string;
    quantity: number;
    size: string;
    color: string;
    price: number;
  }[];
}

const OrdersPage: React.FC = () => {
  const { orders, loading } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<DisplayOrder | null>(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      PENDING: 'default',
      PROCESSING: 'secondary',
      SHIPPED: 'outline',
      DELIVERED: 'default',
      CANCELLED: 'destructive',
    };

    const labels: Record<string, string> = {
      PENDING: 'Pendiente',
      PROCESSING: 'Procesando',
      SHIPPED: 'Enviado',
      DELIVERED: 'Entregado',
      CANCELLED: 'Cancelado',
    };

    return <Badge variant={variants[status] ?? 'default'}>{labels[status] ?? status}</Badge>;
  };

  const pendingOrders = orders.filter((o) => o.status === 'PENDING').length;
  const processingOrders = orders.filter((o) => o.status === 'PROCESSING').length;

  const formatPrice = (value: number | string) => {
    return `$${Number(value).toFixed(2)}`;
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="py-16 text-center text-gray-500">Cargando órdenes...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Órdenes</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Gestiona todas las órdenes de tus clientes</p>
        </div>

        {/* Alerts */}
        {(pendingOrders > 0 || processingOrders > 0) && (
        <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-900/20 dark:border-l-amber-600 border-0">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-amber-600 dark:text-amber-400 mt-1">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200">Órdenes pendientes</h3>
                  <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">
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
              <SelectItem value="PENDING">Pendiente</SelectItem>
              <SelectItem value="PROCESSING">Procesando</SelectItem>
              <SelectItem value="SHIPPED">Enviado</SelectItem>
              <SelectItem value="DELIVERED">Entregado</SelectItem>
              <SelectItem value="CANCELLED">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders Table */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50 dark:bg-slate-800">
                <TableRow className="border-gray-200">
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">ID Orden</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">Cliente</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold text-right">Monto</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">Estado</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold">Fecha</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300 font-semibold text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <TableRow
                      key={order.id}
                      className="border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {order.id.slice(0, 8)}
                      </TableCell>
                      <TableCell>
                        <div className="text-gray-900 dark:text-gray-100 font-medium">{order.customerName}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{order.customerEmail}</div>
                      </TableCell>
                      <TableCell className="text-right text-gray-900 dark:text-gray-100 font-semibold">
                        {formatPrice(order.total)}
                      </TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString('es-AR')}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedOrder(order as DisplayOrder)}
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
                      <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
                        <AlertCircle className="h-8 w-8" />
                        <p>No hay órdenes que coincidan con tu búsqueda</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <CardContent className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total: <span className="font-semibold">{filteredOrders.length}</span> órdenes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalles de la Orden {selectedOrder?.id.slice(0, 8)}</DialogTitle>
            <DialogDescription>Información completa de la orden y cliente</DialogDescription>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Nombre</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100 mt-1">{selectedOrder.customerName}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Email</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100 mt-1">{selectedOrder.customerEmail}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Método de pago</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100 mt-1">{selectedOrder.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Estado</p>
                  <div className="mt-1">{getStatusBadge(selectedOrder.status)}</div>
                </div>
              </div>

              {/* Items */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Productos</h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-800 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{item.productName}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Talla: {item.size} | Color: {item.color}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          {formatPrice(Number(item.price) * item.quantity)}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">x{item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Dirección de Envío</h4>
                <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <p className="text-sm text-gray-900 dark:text-gray-100">{selectedOrder.shippingStreet}</p>
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    {selectedOrder.shippingCity}, {selectedOrder.shippingZipCode}
                  </p>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <span className="font-semibold text-gray-900 dark:text-gray-100">Total:</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatPrice(selectedOrder.total)}
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