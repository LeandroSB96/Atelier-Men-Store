import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Remeras',
    slug: 'remeras',
    image: '/images/remeras/Modelo remera negra.webp',
    description: 'Remeras de algodón premium'
  },
  {
    id: '2',
    name: 'Camisas',
    slug: 'camisas',
    image: '/images/Camisa Cuello Italiano/Camisa Cuello Italiano mockup.webp',
    description: 'Camisas elegantes para toda ocasión'
  },
  {
    id: '3',
    name: 'Pantalones',
    slug: 'pantalones',
    image: '/images/Pantalón Formal Lana/Pantalón Formal Lana mockup.webp',
    description: 'Pantalones de vestir y casuales'
  },
  {
    id: '4',
    name: 'Jeans',
    slug: 'jeans',
    image: '/images/Jean Straight Premium/Mockup_jean.webp',
    description: 'Jeans de calidad superior'
  },
  {
    id: '5',
    name: 'Calzado',
    slug: 'calzado',
    image: '/images/Sneakers Running Tech/Sneakers Running Tech Mockup.webp',
    description: 'Zapatos y zapatillas de diseño'
  },
  {
    id: '6',
    name: 'Accesorios',
    slug: 'accesorios',
    image: '/images/Billetera Cuero Premium/Billetera Cuero Premium mockup.webp',
    description: 'Complementos para tu estilo'
  }
];

export const products: Product[] = [
  // ============ REMERAS ============
  {
    id: '1',
    name: 'Remera Essential Algodón',
    price: 12900,
    description: 'Remera básica de algodón peinado 100%. Corte regular fit con cuello redondo reforzado. Ideal para uso diario.',
    category: 'remeras',
    images: [
      '/images/remeras/Remera Essential negro.webp',
      '/images/remeras/Modelo remera negra.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/remeras/Remera Essential blanco.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/remeras/Remera Essential negro.webp' },
      { name: 'Gris', hex: '#6b7280', image: '/images/remeras/Remera Essential gris.webp' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/remeras/Remera Essential navy.webp' }
    ],
    stock: 45,
    isNew: true
  },
  {
    id: '7',
    name: 'Remera Oversize Premium',
    price: 15900,
    description: 'Remera oversize de algodón pesado 220gsm. Cuello reforzado y hombros caídos. Estilo streetwear.',
    category: 'remeras',
    images: [
      '/images/remeras overzise/Remera oversize oliva.webp',
      '/images/remeras overzise/Remera over modelo.webp'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/remeras overzise/Remera oversize negro.webp' },
      { name: 'Crema', hex: '#F5F5DC', image: '/images/remeras overzise/Remera oversize crema.webp' },
      { name: 'Oliva', hex: '#556B2F', image: '/images/remeras overzise/Remera oversize oliva.webp' }
    ],
    stock: 22,
    isNew: true
  },
  {
    id: '13',
    name: 'Remera Henley Manga Larga',
    price: 18900,
    description: 'Remera estilo henley con botones de madera. Algodón suave con elastano para mayor comodidad.',
    category: 'remeras',
    images: [
      '/images/Remera Henley Manga Larga/Remera Henley gris.webp',
      '/images/Remera Henley Manga Larga/Mockup hiperrealista henley.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Borgoña', hex: '#722F37', image: '/images/Remera Henley Manga Larga/Remera Henley borgoña.webp' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Remera Henley Manga Larga/Remera Henley blanco.webp' },
      { name: 'Gris Oscuro', hex: '#374151', image: '/images/Remera Henley Manga Larga/Remera Henley gris.webp' }
    ],
    stock: 28,
    isFeatured: true
  },
  {
    id: '14',
    name: 'Remera Cuello V Slim',
    price: 13900,
    description: 'Remera con cuello en V de corte slim. Algodón pima peruano ultra suave.',
    category: 'remeras',
    images: [
      '/images/Remera cuello V/Remera blanca cuello V.webp',
      '/images/Remera cuello V/Mockup hiperrealista.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image:'/images/Remera cuello V/Remera negra de homb.webp' },
      { name: 'Blanco', hex: '#FFFFFF', image:'/images/Remera cuello V/Remera blanca cuello V.webp' },
      { name: 'Azul Marino', hex: '#0f172a', image:'/images/Remera cuello V/Remera azul marino cuello V.webp' }
    ],
    stock: 35
  },
  {
    id: '15',
    name: 'Remera Polo Classic',
    price: 22900,
    description: 'Polo clásico de piqué de algodón. Cuello y puños con ribete. Logo bordado discreto.',
    category: 'remeras',
    images: [
      '/images/Remera Polo Classic/Remera Polo azul.webp',
      '/images/Remera Polo Classic/Mockup hiperrealista.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image:'/images/Remera Polo Classic/Remera Polo blanco.webp' },
      { name: 'Negro', hex: '#1a1a1a', image:'/images/Remera Polo Classic/Remera Polo negra.webp' },
      { name: 'Azul Royal', hex: '#4169E1', image:'/images/Remera Polo Classic/Remera Polo azul.webp' },
      { name: 'Verde Bosque', hex: '#228B22', image:'/images/Remera Polo Classic/Remera Polo verde bosque.webp' }
    ],
    stock: 40,
    isFeatured: true
  },
  {
    id: '16',
    name: 'Remera Rayas Náutica',
    price: 16900,
    description: 'Remera de rayas bretonas inspiración náutica. Algodón grueso de alta calidad.',
    category: 'remeras',
    images: [
      '/images/Remera Rayas Náutica/8155928e-e03d-4fed-ab13-685f07543017.webp',
      '/images/Remera Rayas Náutica/48d6c071-0667-446a-bc87-78e26bf124d2.webp',
      '/images/Remera Rayas Náutica/8a9394e4-df04-47c1-905d-dc5105d51b45.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Azul/Blanco', hex: '#1e40af', image: '/images/Remera Rayas Náutica/8a9394e4-df04-47c1-905d-dc5105d51b45.webp' },
      { name: 'Negro/Blanco', hex: '#1a1a1a', image: '/images/Remera Rayas Náutica/48d6c071-0667-446a-bc87-78e26bf124d2.webp' }
    ],
    stock: 18
  },

  // ============ CAMISAS ============
  {
    id: '2',
    name: 'Camisa Oxford Clásica',
    price: 24900,
    originalPrice: 32900,
    description: 'Camisa Oxford de algodón con botones de nácar genuino. Cuello button-down. Perfecta para ocasiones formales e informales.',
    category: 'camisas',
    images: [
      '/images/Camisas oxford/Camisa Oxford azul.webp',
      '/images/Camisas oxford/Camisa Oxford celeste.webp',
      '/images/Camisas oxford/Camisa Oxford clásic.webp',
      '/images/Camisas oxford/Mockup camisa.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Camisas oxford/Camisa Oxford celeste.webp' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Camisas oxford/Camisa Oxford clásic.webp' },
      { name: 'Rosa', hex: '#FFC0CB', image: '/images/Camisas oxford/Camisa Oxford rosa.webp' },
      { name: 'Rayado Azul', hex: '#6495ED', image: '/images/Camisas oxford/Camisa Oxford azul.webp' }
    ],
    stock: 28,
    isOnSale: true,
    isFeatured: true
  },
  {
    id: '8',
    name: 'Camisa Lino Verano',
    price: 28900,
    description: 'Camisa de lino puro para días cálidos. Corte relajado con cuello mao. Transpirable y elegante.',
    category: 'camisas',
    images: [
      '/images/Camisa Lino/Camisa Lino blanco.webp',
      '/images/Camisa Lino/Camisa Lino arena.webp',
      '/images/Camisa Lino/Camisa Lino celeste.webp',
      '/images/Camisa Lino/Camisa Lino mockup.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Camisa Lino/Camisa Lino blanco.webp' },
      { name: 'Arena', hex: '#C2B280', image: '/images/Camisa Lino/Camisa Lino arena.webp' },
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Camisa Lino/Camisa Lino celeste.webp' }
    ],
    stock: 15,
    isFeatured: true
  },
  {
    id: '17',
    name: 'Camisa Denim Casual',
    price: 32900,
    description: 'Camisa de denim suave con lavado vintage. Botones de cobre envejecido. Estilo western moderno.',
    category: 'camisas',
    images: [
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano mockup.webp',
      '/images/Camisas oxford/Mockup camisa.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Azul Claro', hex: '#6495ED' },
      { name: 'Azul Oscuro', hex: '#1e3a5f' }
    ],
    stock: 20,
    isNew: true
  },
  {
    id: '18',
    name: 'Camisa Franela Escocesa',
    price: 26900,
    description: 'Camisa de franela cepillada con patrón escocés. Ideal para otoño e invierno. Cálida y cómoda.',
    category: 'camisas',
    images: [
      '/images/Franela Escocesa/Franela Escocesa mockup.webp',
      '/images/Franela Escocesa/Franela Escocesa rojo-negro.webp',
      '/images/Franela Escocesa/Franela Escocesa verde negro.webp',
      '/images/Franela Escocesa/Franela Escocesa azul-gris.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Rojo/Negro', hex: '#8B0000', image: '/images/Franela Escocesa/Franela Escocesa rojo-negro.webp' },
      { name: 'Verde/Negro', hex: '#006400', image: '/images/Franela Escocesa/Franela Escocesa verde negro.webp' },
      { name: 'Azul/Gris', hex: '#4682B4', image: '/images/Franela Escocesa/Franela Escocesa azul-gris.webp' }
    ],
    stock: 25
  },
  {
    id: '19',
    name: 'Camisa Slim Stretch',
    price: 27900,
    description: 'Camisa de corte slim con elastano para ajuste perfecto. Tela de popelina de alta densidad.',
    category: 'camisas',
    images: [
      '/images/Slim Stretch/Slim Stretch mockup.webp',
      '/images/Slim Stretch/Slim Stretch blanco.webp',
      '/images/Slim Stretch/Slim Stretch gris perla.webp',
      '/images/Slim Stretch/Slim Stretch negro.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Slim Stretch/Slim Stretch blanco.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Slim Stretch/Slim Stretch negro.webp' },
      { name: 'Gris Perla', hex: '#C0C0C0', image: '/images/Slim Stretch/Slim Stretch gris perla.webp' }
    ],
    stock: 32,
    isFeatured: true
  },
  {
    id: '20',
    name: 'Camisa Cuello Italiano',
    price: 35900,
    description: 'Camisa formal con cuello italiano abierto. Perfecta para usar con o sin corbata. Algodón egipcio.',
    category: 'camisas',
    images: [
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano blanco.webp',
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano celeste.webp',
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano mockup.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Camisa Cuello Italiano/Camisa Cuello Italiano blanco.webp' },
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Camisa Cuello Italiano/Camisa Cuello Italiano celeste.webp' }
    ],
    stock: 18
  },

  // ============ PANTALONES ============
  {
    id: '3',
    name: 'Pantalón Chino Slim',
    price: 29900,
    description: 'Pantalón chino de corte slim en algodón stretch. Bolsillos laterales y traseros. Acabado premium.',
    category: 'pantalones',
    images: [
      '/images/pantalon chino slim/pantalon chino slim navy.webp',
      '/images/pantalon chino slim/pantalon chino slim mockup.webp'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Beige', hex: '#D4A574', image: '/images/pantalon chino slim/pantalon chino slim beige.webp' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/pantalon chino slim/pantalon chino slim navy.webp' },
      { name: 'Oliva', hex: '#556B2F', image: '/images/pantalon chino slim/pantalon chino slim oliva.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/pantalon chino slim/pantalon chino slim negro.webp' }
    ],
    stock: 32,
    isFeatured: true
  },
  {
    id: '12',
    name: 'Pantalón Formal Lana',
    price: 45900,
    description: 'Pantalón de vestir en lana merino italiana. Pinzas frontales y dobladillo. Ideal para oficina.',
    category: 'pantalones',
    images: [
      '/images/Pantalón Formal Lana/Pantalón Formal Lana mockup.webp',
      '/images/Pantalón Formal Lana/Pantalón Formal Lana gris.webp',
      '/images/Pantalón Formal Lana/Pantalón Formal Lana navy.webp',
      '/images/Pantalón Formal Lana/Pantalón Formal Lana negro.webp'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Gris', hex: '#6b7280', image: '/images/Pantalón Formal Lana/Pantalón Formal Lana gris.webp' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Pantalón Formal Lana/Pantalón Formal Lana navy.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Pantalón Formal Lana/Pantalón Formal Lana negro.webp' }
    ],
    stock: 14
  },
  {
    id: '21',
    name: 'Pantalón Cargo Modern',
    price: 34900,
    description: 'Pantalón cargo de corte moderno con bolsillos funcionales. Algodón ripstop resistente.',
    category: 'pantalones',
    images: [
      '/images/Pantalon Cargo Modern/Cargo Modern mockup.webp',
      '/images/Pantalon Cargo Modern/Cargo Modern oliva.webp',
      '/images/Pantalon Cargo Modern/Cargo Modern camel.webp',
      '/images/Pantalon Cargo Modern/Cargo Modern negro.webp'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Oliva', hex: '#556B2F', image: '/images/Pantalon Cargo Modern/Cargo Modern oliva.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Pantalon Cargo Modern/Cargo Modern negro.webp' },
      { name: 'Camel', hex: '#C19A6B', image: '/images/Pantalon Cargo Modern/Cargo Modern camel.webp' }
    ],
    stock: 22,
    isNew: true
  },
  {
    id: '22',
    name: 'Pantalón Jogger Premium',
    price: 27900,
    description: 'Jogger de algodón terry con puños elásticos. Comodidad y estilo urbano combinados.',
    category: 'pantalones',
    images: [
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium negro.webp',
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium gris melenge.webp',
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium navy.webp',
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium mockup.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Pantalón Jogger Premium/Pantalón Jogger Premium negro.webp' },
      { name: 'Gris Melange', hex: '#9ca3af', image: '/images/Pantalón Jogger Premium/Pantalón Jogger Premium gris melenge.webp' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Pantalón Jogger Premium/Pantalón Jogger Premium navy.webp' }
    ],
    stock: 30
  },
  {
    id: '23',
    name: 'Pantalón Lino Relajado',
    price: 32900,
    description: 'Pantalón de lino con corte relajado. Perfecto para verano. Cintura elástica trasera.',
    category: 'pantalones',
    images: [
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado blanco.webp',
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado.webp',
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado celeste.webp',
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado Mockup.webp'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Pantalón Lino Relajado/Pantalón Lino Relajado blanco.webp' },
      { name: 'Beige', hex: '#F5F5DC', image: '/images/Pantalón Lino Relajado/Pantalón Lino Relajado.webp' },
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Pantalón Lino Relajado/Pantalón Lino Relajado celeste.webp' }
    ],
    stock: 16,
    isFeatured: true
  },

  // ============ JEANS ============
  {
    id: '4',
    name: 'Jean Straight Premium',
    price: 34900,
    description: 'Jean de denim japonés de 12oz. Corte straight con lavado medio. Costuras reforzadas y remaches de cobre.',
    category: 'jeans',
    images: [
      '/images/Jean Straight Premium/Jean Straight Indigo.webp',
      '/images/Jean Straight Premium/Jean Straight Negro.webp',
      '/images/Jean Straight Premium/Jean Straight Azul Claro.webp',
      '/images/Jean Straight Premium/Mockup_jean.webp'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Índigo', hex: '#3F51B5', image: '/images/Jean Straight Premium/Jean Straight Indigo.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Jean Straight Premium/Jean Straight Negro.webp' },
      { name: 'Azul Claro', hex: '#6495ED', image: '/images/Jean Straight Premium/Jean Straight Azul Claro.webp' }
    ],
    stock: 24,
    isNew: true,
    isFeatured: true
  },
  {
    id: '10',
    name: 'Jean Skinny Dark',
    price: 31900,
    description: 'Jean skinny en denim stretch oscuro. Lavado raw con ligero desgaste. Silueta moderna.',
    category: 'jeans',
    images: [
      '/images/Jean skinny/Jean skinny dark blue.webp',
      '/images/Jean skinny/Jean skinny negro.webp',
      '/images/Jean skinny/mockup modelo jean skinny.webp'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Dark Blue', hex: '#1a1a3e', image: '/images/Jean skinny/Jean skinny dark blue.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Jean skinny/Jean skinny negro.webp' }
    ],
    stock: 20
  },
  {
    id: '24',
    name: 'Jean Slim Fit Classic',
    price: 29900,
    description: 'Jean slim fit en denim comfort stretch. Lavado medio vintage. El básico perfecto.',
    category: 'jeans',
    images: [
      '/images/Jean Slim Fit Classic/Slim Fit Classic azul medio.webp',
      '/images/Jean Slim Fit Classic/Slim Fit Classic azul claro.webp',
      '/images/Jean Slim Fit Classic/Mockup Slim Fit Classic.webp'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Azul Medio', hex: '#4169E1', image: '/images/Jean Slim Fit Classic/Slim Fit Classic azul medio.webp' },
      { name: 'Azul Claro', hex: '#87CEEB', image: '/images/Jean Slim Fit Classic/Slim Fit Classic azul claro.webp' }
    ],
    stock: 35
  },
  {
    id: '25',
    name: 'Jean Relaxed Vintage',
    price: 36900,
    description: 'Jean de corte relajado con lavado vintage auténtico. Denim selvedge de alta calidad.',
    category: 'jeans',
    images: [
      '/images/Jean Relaxed Vintage/c91417ee-e8f0-4dde-bebe-f43ef4dd11b7.webp',
      '/images/Jean Relaxed Vintage/e2049900-7238-4c6c-88a8-1ca3980982f6.webp',
      '/images/Jean Relaxed Vintage/Mockuo Relaxed Vintage.webp'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Vintage Blue', hex: '#6B8E9F', image: '/images/Jean Relaxed Vintage/c91417ee-e8f0-4dde-bebe-f43ef4dd11b7.webp' },
      { name: 'Stone Wash', hex: '#8B8B8B', image: '/images/Jean Relaxed Vintage/e2049900-7238-4c6c-88a8-1ca3980982f6.webp' }
    ],
    stock: 18,
    isNew: true
  },
  {
    id: '26',
    name: 'Jean Negro Essential',
    price: 28900,
    description: 'Jean negro de corte regular. Denim stretch de alta recuperación. Siempre elegante.',
    category: 'jeans',
    images: [
      '/images/Jean Negro Essential/Jean essential negro.webp',
      '/images/Jean Negro Essential/Jean essential claro.webp',
      '/images/Jean Negro Essential/mockup Jean Essential.webp'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Jean Negro Essential/Jean essential negro.webp' },
      { name: 'Gris Oscuro', hex: '#374151', image: '/images/Jean Negro Essential/Jean essential claro.webp' }
    ],
    stock: 42
  },

  // ============ CALZADO ============
  {
    id: '5',
    name: 'Zapatillas Urban Classic',
    price: 54900,
    originalPrice: 69900,
    description: 'Zapatillas de cuero genuino con suela de goma vulcanizada. Diseño minimalista y atemporal.',
    category: 'calzado',
    images: [
      '/images/Urban Classic/Urban Classic blanco.webp',
      '/images/Urban Classic/Urban Classic gris.webp',
      '/images/Urban Classic/Urban Classic negro.webp',
      '/images/Urban Classic/Urban Classic mockup.webp'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Urban Classic/Urban Classic blanco.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Urban Classic/Urban Classic negro.webp' },
      { name: 'Gris', hex: '#6b7280', image: '/images/Urban Classic/Urban Classic gris.webp' }
    ],
    stock: 18,
    isOnSale: true
  },
  {
    id: '9',
    name: 'Zapatos Derby Cuero',
    price: 79900,
    description: 'Zapatos Derby de cuero pulido a mano. Suela de cuero Goodyear welted. Fabricación española.',
    category: 'calzado',
    images: [
      '/images/Derby Cuero/Derby Cuero cognac.webp',
      '/images/Derby Cuero/Derby Cuero marron.webp',
      '/images/Derby Cuero/Derby Cuero Negro.webp',
      '/images/Derby Cuero/Derby Cuero mockup.webp'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Cognac', hex: '#9A463D', image: '/images/Derby Cuero/Derby Cuero cognac.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Derby Cuero/Derby Cuero Negro.webp' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Derby Cuero/Derby Cuero marron.webp' }
    ],
    stock: 12,
    isFeatured: true
  },
  {
    id: '27',
    name: 'Mocasines Penny Loafer',
    price: 69900,
    description: 'Mocasines penny loafer de cuero napa. Construcción Blake stitch. Elegancia italiana.',
    category: 'calzado',
    images: [
      '/images/Mocasines Penny Loafer/Penny Loafer burgundy.webp',
      '/images/Mocasines Penny Loafer/Penny Loafer negro.webp',
      '/images/Mocasines Penny Loafer/Penny Loafer tan.webp',
      '/images/Mocasines Penny Loafer/Penny Loafer mockup.webp'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Burgundy', hex: '#722F37', image: '/images/Mocasines Penny Loafer/Penny Loafer burgundy.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Mocasines Penny Loafer/Penny Loafer negro.webp' },
      { name: 'Tan', hex: '#D2B48C', image: '/images/Mocasines Penny Loafer/Penny Loafer tan.webp' }
    ],
    stock: 15,
    isFeatured: true
  },
  {
    id: '28',
    name: 'Botas Chelsea',
    price: 89900,
    description: 'Botas Chelsea de cuero con elásticos laterales. Suela de goma antideslizante. Estilo británico.',
    category: 'calzado',
    images: [
      '/images/Botas Chelsea/Botas Chelsea negro.webp',
      '/images/Botas Chelsea/Botas Chelsea marron.webp',
      '/images/Botas Chelsea/Botas Chelsea gamuza fris.webp',
      '/images/Botas Chelsea/Botas Chelsea mockup.webp'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Botas Chelsea/Botas Chelsea negro.webp' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Botas Chelsea/Botas Chelsea marron.webp' },
      { name: 'Gamuza Gris', hex: '#6b7280', image: '/images/Botas Chelsea/Botas Chelsea gamuza fris.webp' }
    ],
    stock: 10,
    isNew: true
  },
  {
    id: '29',
    name: 'Sneakers Running Tech',
    price: 64900,
    description: 'Zapatillas deportivas con tecnología de amortiguación. Mesh transpirable y suela ligera.',
    category: 'calzado',
    images: [
      '/images/Sneakers Running Tech/Sneakers Running Tech negro.webp',
      '/images/Sneakers Running Tech/Sneakers Running Tech gris-azul.webp',
      '/images/Sneakers Running Tech/Sneakers Running Tech blanco total.webp',
      '/images/Sneakers Running Tech/Sneakers Running Tech Mockup.webp'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Negro/Blanco', hex: '#1a1a1a', image: '/images/Sneakers Running Tech/Sneakers Running Tech negro.webp' },
      { name: 'Gris/Azul', hex: '#6b7280', image: '/images/Sneakers Running Tech/Sneakers Running Tech gris-azul.webp' },
      { name: 'Blanco Total', hex: '#FFFFFF', image: '/images/Sneakers Running Tech/Sneakers Running Tech blanco total.webp' }
    ],
    stock: 25
  },
  {
    id: '30',
    name: 'Alpargatas Premium',
    price: 24900,
    description: 'Alpargatas de lona con suela de yute natural. Frescas y cómodas para el verano.',
    category: 'calzado',
    images: [
      '/images/Alpargatas Premium/Alpargatas Premium blanco.webp',
      '/images/Alpargatas Premium/Alpargatas Premium navy.webp',
      '/images/Alpargatas Premium/Alpargatas Premium natural.webp',
      '/images/Alpargatas Premium/Alpargatas Premium mockup.webp'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Alpargatas Premium/Alpargatas Premium navy.webp' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Alpargatas Premium/Alpargatas Premium blanco.webp' },
      { name: 'Natural', hex: '#D4A574', image: '/images/Alpargatas Premium/Alpargatas Premium natural.webp' }
    ],
    stock: 30,
    isOnSale: true,
    originalPrice: 32900
  },

  // ============ ACCESORIOS ============
  {
    id: '6',
    name: 'Cinturón Cuero Italiano',
    price: 18900,
    description: 'Cinturón de cuero italiano curtido al vegetal. Hebilla de latón envejecido. Fabricación artesanal.',
    category: 'accesorios',
    images: [
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano negro.webp',
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano marron.webp',
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano cognac.webp',
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano mockup.webp'
    ],
    sizes: ['85', '90', '95', '100', '105', '110'],
    colors: [
      { name: 'Marrón', hex: '#8B4513', image: '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano marron.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano negro.webp' },
      { name: 'Cognac', hex: '#9A463D', image: '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano cognac.webp' }
    ],
    stock: 35
  },
  {
    id: '11',
    name: 'Reloj Minimalista',
    price: 42900,
    originalPrice: 54900,
    description: 'Reloj con caja de acero inoxidable y correa de cuero. Movimiento japonés. Resistente al agua.',
    category: 'accesorios',
    images: [
      '/images/Reloj Minimalista/Reloj Minimalista plateado.webp',
      '/images/Reloj Minimalista/Reloj Minimalista dorado.webp',
      '/images/Reloj Minimalista/Reloj Minimalista negro.webp',
      '/images/Reloj Minimalista/Reloj Minimalista mockup.webp'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Plateado', hex: '#C0C0C0', image: '/images/Reloj Minimalista/Reloj Minimalista plateado.webp' },
      { name: 'Dorado', hex: '#FFD700', image: '/images/Reloj Minimalista/Reloj Minimalista dorado.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Reloj Minimalista/Reloj Minimalista negro.webp' }
    ],
    stock: 8,
    isOnSale: true
  },
  {
    id: '31',
    name: 'Billetera Cuero Premium',
    price: 24900,
    description: 'Billetera de cuero con capacidad para 8 tarjetas. Compartimento para billetes y monedero.',
    category: 'accesorios',
    images: [
      '/images/Billetera Cuero Premium/Billetera Cuero Premium negro.webp',
      '/images/Billetera Cuero Premium/Billetera Cuero Premium marron.webp',
      '/images/Billetera Cuero Premium/Billetera Cuero Premium cafe.webp',
      '/images/Billetera Cuero Premium/Billetera Cuero Premium mockup.webp'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Billetera Cuero Premium/Billetera Cuero Premium negro.webp' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Billetera Cuero Premium/Billetera Cuero Premium marron.webp' },
      { name: 'Café', hex: '#6F4E37', image: '/images/Billetera Cuero Premium/Billetera Cuero Premium cafe.webp' }
    ],
    stock: 40
  },
  {
    id: '32',
    name: 'Gafas de Sol Aviador',
    price: 34900,
    description: 'Gafas de sol estilo aviador con montura de metal. Lentes polarizados con protección UV400.',
    category: 'accesorios',
    images: [
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador dorado.webp',
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador gris.webp',
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador negro.webp',
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador mockup.webp'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Dorado/Marrón', hex: '#FFD700', image: '/images/Gafas de Sol Aviador/Gafas de Sol Aviador dorado.webp' },
      { name: 'Plateado/Gris', hex: '#C0C0C0', image: '/images/Gafas de Sol Aviador/Gafas de Sol Aviador gris.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Gafas de Sol Aviador/Gafas de Sol Aviador negro.webp' }
    ],
    stock: 22,
    isFeatured: true
  },
  {
    id: '33',
    name: 'Mochila Urban Cuero',
    price: 59900,
    description: 'Mochila de cuero con compartimento para laptop 15". Bolsillos organizadores y cremalleras YKK.',
    category: 'accesorios',
    images: [
      '/images/mochila urban cuero/mochila urban cuero negro.webp',
      '/images/mochila urban cuero/mochila urban cuero mockup.webp'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/mochila urban cuero/mochila urban cuero negro.webp' },
      { name: 'Marrón Vintage', hex: '#8B4513', image: '/images/mochila urban cuero/mochila urban cuero marron.webp' }
    ],
    stock: 12,
    isNew: true
  },
  {
    id: '34',
    name: 'Bufanda Lana Merino',
    price: 22900,
    description: 'Bufanda de lana merino extra suave. Tejido denso para máximo calor. Largo 180cm.',
    category: 'accesorios',
    images: [
      '/images/Bufanda Lana Merino/Bufanda Lana Merino gris.webp',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino negro.webp',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino camel.webp',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino borgoña.webp',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino mockup.webp'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Gris', hex: '#6b7280', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino gris.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino negro.webp' },
      { name: 'Camel', hex: '#C19A6B', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino camel.webp' },
      { name: 'Borgoña', hex: '#722F37', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino borgoña.webp' }
    ],
    stock: 28
  },
  {
    id: '35',
    name: 'Corbata Seda Italiana',
    price: 28900,
    description: 'Corbata de seda italiana tejida a mano. Ancho 8cm. Acabado de lujo.',
    category: 'accesorios',
    images: [
      '/images/Corbata Seda Italiana/Corbata Seda Italiana navy.webp',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana borgoña.webp',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana gris.webp',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana negro.webp',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana mockup.webp'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana navy.webp' },
      { name: 'Borgoña', hex: '#722F37', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana borgoña.webp' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana negro.webp' },
      { name: 'Gris', hex: '#6b7280', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana gris.webp' }
    ],
    stock: 35,
    isFeatured: true
  },
  {
    id: '36',
    name: 'Gorra Baseball Premium',
    price: 14900,
    description: 'Gorra de algodón con visera curvada. Ajuste trasero de metal. Logo bordado.',
    category: 'accesorios',
    images: [
      '/images/Gorra Baseball Premium/Gorra Baseball Premium negro.webp',
      '/images/Gorra Baseball Premium/Gorra Baseball Premium navy.webp',
      '/images/Gorra Baseball Premium/Gorra Baseball Premium beige.webp',
      '/images/Gorra Baseball Premium/Gorra Baseball Premium mockup.webp'
    ],
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Gorra Baseball Premium/Gorra Baseball Premium negro.webp' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Gorra Baseball Premium/Gorra Baseball Premium navy.webp' },
      { name: 'Beige', hex: '#F5F5DC', image: '/images/Gorra Baseball Premium/Gorra Baseball Premium beige.webp' }
    ],
    stock: 50
  },
  {
    id: '37',
    name: 'Guantes Cuero Touch',
    price: 32900,
    description: 'Guantes de cuero napa con forro de cashmere. Puntas compatibles con pantallas táctiles.',
    category: 'accesorios',
    images: [
      '/images/Guantes Cuero Touch/Guantes Cuero Touch negro.webp',
      '/images/Guantes Cuero Touch/Guantes Cuero Touch marron.webp',
      '/images/Guantes Cuero Touch/Guantes Cuero Touch mockup.webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Guantes Cuero Touch/Guantes Cuero Touch negro.webp' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Guantes Cuero Touch/Guantes Cuero Touch marron.webp' }
    ],
    stock: 20,
    isNew: true
  }
];


products.forEach((p: Product) => {
  const imgs = p.images || [];
  const mockup = imgs.find(i => /mockup/i.test(i)) || imgs[imgs.length - 1];
  let defaultImg: string | undefined;
  if (p.colors && p.colors.length > 0 && p.colors[0]?.image) {
    defaultImg = p.colors[0].image;
  } else {
    defaultImg = imgs.find(i => !/mockup/i.test(i)) || imgs[0];
  }
  p.images = [defaultImg, mockup].filter(Boolean) as string[];
});

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.isOnSale);
};
