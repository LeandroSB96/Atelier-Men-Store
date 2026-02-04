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
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Edit, Trash2, Plus, Search, AlertCircle } from 'lucide-react';
import { Product } from '@/types/product';
import { products as initialProducts } from '@/data/products';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>({});

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        price: 0,
        description: '',
        category: '',
        stock: 0,
        images: [],
        sizes: [],
        colors: [],
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
    setFormData({});
  };

  const handleSaveProduct = () => {
    if (!formData.name || !formData.price || !formData.category) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...editingProduct, ...formData } : p
        ) as Product[]
      );
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name || '',
        price: formData.price || 0,
        description: formData.description || '',
        category: formData.category || '',
        stock: formData.stock || 0,
        images: formData.images || [],
        sizes: formData.sizes || [],
        colors: formData.colors || [],
      };
      setProducts([...products, newProduct]);
    }

    handleCloseDialog();
  };

  const handleDeleteProduct = (product: Product) => {
    setProducts(products.filter((p) => p.id !== product.id));
    setDeletingProduct(null);
  };

  const handleInputChange = <K extends keyof Product>(field: K, value: Product[K]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Productos</h2>
            <p className="text-gray-600 mt-1">Gestiona el inventario de tu tienda</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => handleOpenDialog()}
                className="self-start sm:self-auto"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Producto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                </DialogTitle>
                <DialogDescription>
                  {editingProduct
                    ? 'Actualiza los datos del producto'
                    : 'Agrega un nuevo producto a tu tienda'}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre *</label>
                    <Input
                      value={formData.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Nombre del producto"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categoría *</label>
                    <Input
                      value={formData.category || ''}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      placeholder="ej: Remeras"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Precio ($) *</label>
                    <Input
                      type="number"
                      value={formData.price || ''}
                      onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Stock</label>
                    <Input
                      type="number"
                      value={formData.stock || ''}
                      onChange={(e) => handleInputChange('stock', parseInt(e.target.value))}
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Descripción</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Descripción del producto"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                  />
                </div>

                <div className="flex gap-2 justify-end pt-4 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseDialog}
                  >
                    Cancelar
                  </Button>
                  <Button onClick={handleSaveProduct}>
                    {editingProduct ? 'Actualizar' : 'Crear'} Producto
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search Bar */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card className="border-0 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow className="border-gray-200">
                  <TableHead className="text-gray-700 font-semibold">Nombre</TableHead>
                  <TableHead className="text-gray-700 font-semibold">Categoría</TableHead>
                  <TableHead className="text-gray-700 font-semibold text-right">Precio</TableHead>
                  <TableHead className="text-gray-700 font-semibold text-right">Stock</TableHead>
                  <TableHead className="text-gray-700 font-semibold text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <TableRow
                      key={product.id}
                      className="border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <TableCell className="font-medium text-gray-900">
                        {product.name}
                      </TableCell>
                      <TableCell className="text-gray-600">{product.category}</TableCell>
                      <TableCell className="text-right text-gray-900 font-semibold">
                        ${product.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <span
                          className={cn(
                            'px-3 py-1 rounded-full text-sm font-medium',
                            product.stock < 10
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          )}
                        >
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleOpenDialog(product)}
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setDeletingProduct(product)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      <div className="flex flex-col items-center gap-2 text-gray-500">
                        <AlertCircle className="h-8 w-8" />
                        <p>No hay productos que coincidan con tu búsqueda</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <CardContent className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600">
              Total: <span className="font-semibold">{filteredProducts.length}</span> productos
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingProduct} onOpenChange={(open) => !open && setDeletingProduct(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar producto?</AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar "{deletingProduct?.name}". Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3 justify-end">
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingProduct && handleDeleteProduct(deletingProduct)}
              className="bg-red-600 hover:bg-red-700"
            >
              Eliminar
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default ProductsPage;
