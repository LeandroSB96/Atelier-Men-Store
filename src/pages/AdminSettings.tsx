import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StoreSettings } from '@/types/admin';
import { CheckCircle2, AlertCircle, Mail, Phone, MapPin, DollarSign } from 'lucide-react';

const initialSettings: StoreSettings = {
  storeName: 'Atelier Men Store',
  storeEmail: 'info@ateliermen.com',
  storePhone: '+34 912 345 678',
  currency: 'EUR',
  taxRate: 21,
  shippingCost: 9.99,
  minOrderForFreeShipping: 50,
};

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<StoreSettings>(initialSettings);
  const [savedSettings, setSavedSettings] = useState<StoreSettings>(initialSettings);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hasChanges = JSON.stringify(settings) !== JSON.stringify(savedSettings);

  const handleInputChange = <K extends keyof StoreSettings>(field: K, value: StoreSettings[K]) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simular guardado (en producción hacer llamada a API)
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSavedSettings(settings);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSettings(savedSettings);
  };

  const SettingField = ({
    label,
    description,
    icon: Icon,
    children,
  }: {
    label: string;
    description: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <div className="p-6 border-b border-gray-200 last:border-b-0">
      <div className="flex gap-4">
        {Icon && <div className="text-blue-600 mt-1">{Icon}</div>}
        <div className="flex-1">
          <label className="block font-semibold text-gray-900 mb-1">{label}</label>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Configuración</h2>
          <p className="text-gray-600 mt-1">Administra la configuración de tu tienda</p>
        </div>

        {/* Alerts */}
        {showSuccess && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Configuración guardada exitosamente
            </AlertDescription>
          </Alert>
        )}

        {showError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Error al guardar la configuración. Intenta de nuevo.</AlertDescription>
          </Alert>
        )}

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="shipping">Envíos</TabsTrigger>
            <TabsTrigger value="taxes">Impuestos</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Información General</CardTitle>
                <CardDescription>Configuración básica de tu tienda</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <SettingField
                  label="Nombre de la Tienda"
                  description="El nombre que se mostrará en tu tienda online"
                  icon={<span className="text-2xl">🏪</span>}
                >
                  <Input
                    value={settings.storeName}
                    onChange={(e) => handleInputChange('storeName', e.target.value)}
                    className="max-w-md"
                  />
                </SettingField>

                <SettingField
                  label="Email de la Tienda"
                  description="Email de contacto principal para los clientes"
                  icon={<Mail className="h-5 w-5" />}
                >
                  <Input
                    type="email"
                    value={settings.storeEmail}
                    onChange={(e) => handleInputChange('storeEmail', e.target.value)}
                    className="max-w-md"
                  />
                </SettingField>

                <SettingField
                  label="Teléfono de la Tienda"
                  description="Número de contacto para atención al cliente"
                  icon={<Phone className="h-5 w-5" />}
                >
                  <Input
                    value={settings.storePhone}
                    onChange={(e) => handleInputChange('storePhone', e.target.value)}
                    className="max-w-md"
                  />
                </SettingField>

                <SettingField
                  label="Moneda"
                  description="Moneda en la que se mostrarán los precios"
                  icon={<DollarSign className="h-5 w-5" />}
                >
                  <select
                    value={settings.currency}
                    onChange={(e) => handleInputChange('currency', e.target.value)}
                    className="max-w-md px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="USD">USD - Dólar Estadounidense</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - Libra Esterlina</option>
                    <option value="ARS">ARS - Peso Argentino</option>
                    <option value="MXN">MXN - Peso Mexicano</option>
                  </select>
                </SettingField>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Shipping Settings */}
          <TabsContent value="shipping">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Configuración de Envíos</CardTitle>
                <CardDescription>Costos y opciones de envío</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <SettingField
                  label="Costo de Envío Estándar"
                  description="El costo de envío que se aplicará a todas las órdenes"
                  icon={<span className="text-2xl">📦</span>}
                >
                  <div className="flex items-center gap-2 max-w-md">
                    <span className="text-gray-600">{settings.currency}</span>
                    <Input
                      type="number"
                      step="0.01"
                      value={settings.shippingCost}
                      onChange={(e) =>
                        handleInputChange('shippingCost', parseFloat(e.target.value))
                      }
                    />
                  </div>
                </SettingField>

                <SettingField
                  label="Monto Mínimo para Envío Gratis"
                  description="Las órdenes mayores a este monto tendrán envío gratuito"
                  icon={<span className="text-2xl">🎁</span>}
                >
                  <div className="flex items-center gap-2 max-w-md">
                    <span className="text-gray-600">{settings.currency}</span>
                    <Input
                      type="number"
                      step="0.01"
                      value={settings.minOrderForFreeShipping}
                      onChange={(e) =>
                        handleInputChange(
                          'minOrderForFreeShipping',
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  </div>
                </SettingField>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tax Settings */}
          <TabsContent value="taxes">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Configuración de Impuestos</CardTitle>
                <CardDescription>Tasas fiscales y configuración de impuestos</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <SettingField
                  label="Tasa de Impuesto"
                  description="Porcentaje de IVA o impuesto a aplicar en todas las órdenes"
                  icon={<span className="text-2xl">💼</span>}
                >
                  <div className="flex items-center gap-2 max-w-md">
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      value={settings.taxRate}
                      onChange={(e) => handleInputChange('taxRate', parseFloat(e.target.value))}
                    />
                    <span className="text-gray-600">%</span>
                  </div>
                </SettingField>

                <div className="p-6 bg-blue-50 border-t border-gray-200">
                  <div className="rounded-lg bg-white p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Ejemplo de cálculo:</span>
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span className="font-medium">$100.00</span>
                      </div>
                      <div className="flex justify-between text-blue-600">
                        <span>Impuesto ({settings.taxRate}%):</span>
                        <span className="font-medium">
                          ${((100 * settings.taxRate) / 100).toFixed(2)}
                        </span>
                      </div>
                      <div className="border-t border-blue-200 pt-2 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${(100 + (100 * settings.taxRate) / 100).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        {hasChanges && (
          <div className="flex gap-3 justify-end sticky bottom-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <Button
              variant="outline"
              onClick={handleReset}
              disabled={isLoading}
            >
              Descartar cambios
            </Button>
            <Button
              onClick={handleSave}
              disabled={isLoading}
            >
              {isLoading ? 'Guardando...' : 'Guardar cambios'}
            </Button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;
