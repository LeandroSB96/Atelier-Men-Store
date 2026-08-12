import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Remeras',
    slug: 'remeras',
    image: '/images/remeras/Modelo remera negra.png',
    description: 'Remeras de algodón premium'
  },
  {
    id: '2',
    name: 'Camisas',
    slug: 'camisas',
    image: '/images/Camisa Cuello Italiano/Camisa Cuello Italiano mockup.jpg',
    description: 'Camisas elegantes para toda ocasión'
  },
  {
    id: '3',
    name: 'Pantalones',
    slug: 'pantalones',
    image: '/images/Pantalón Formal Lana/Pantalón Formal Lana mockup.png',
    description: 'Pantalones de vestir y casuales'
  },
  {
    id: '4',
    name: 'Jeans',
    slug: 'jeans',
    image: '/images/Jean Straight Premium/Mockup_jean.png',
    description: 'Jeans de calidad superior'
  },
  {
    id: '5',
    name: 'Calzado',
    slug: 'calzado',
    image: '/images/Sneakers Running Tech/Sneakers Running Tech Mockup.png',
    description: 'Zapatos y zapatillas de diseño'
  },
  {
    id: '6',
    name: 'Accesorios',
    slug: 'accesorios',
    image: '/images/Billetera Cuero Premium/Billetera Cuero Premium mockup.png',
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
      '/images/remeras/Remera Essential negro.png',
      '/images/remeras/Modelo remera negra.png'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/remeras/Remera Essential blanco.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/remeras/Remera Essential negro.png' },
      { name: 'Gris', hex: '#6b7280', image: '/images/remeras/Remera Essential gris.png' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/remeras/Remera Essential navy.png' }
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
      '/images/remeras overzise/Remera oversize oliva.png',
      '/images/remeras overzise/Remera over modelo.png'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/remeras overzise/Remera oversize negro.png' },
      { name: 'Crema', hex: '#F5F5DC', image: '/images/remeras overzise/Remera oversize crema.png' },
      { name: 'Oliva', hex: '#556B2F', image: '/images/remeras overzise/Remera oversize oliva.png' }
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
      '/images/Remera Henley Manga Larga/Remera Henley gris.png',
      '/images/Remera Henley Manga Larga/Mockup hiperrealista henley.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Borgoña', hex: '#722F37', image: '/images/Remera Henley Manga Larga/Remera Henley borgoña.png' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Remera Henley Manga Larga/Remera Henley blanco.png' },
      { name: 'Gris Oscuro', hex: '#374151', image: '/images/Remera Henley Manga Larga/Remera Henley gris.png' }
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
      '/images/Remera cuello V/Remera blanca cuello V.png',
      '/images/Remera cuello V/Mockup hiperrealista.png'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image:'/images/Remera cuello V/Remera negra de homb.png' },
      { name: 'Blanco', hex: '#FFFFFF', image:'/images/Remera cuello V/Remera blanca cuello V.png' },
      { name: 'Azul Marino', hex: '#0f172a', image:'/images/Remera cuello V/Remera azul marino cuello V.png' }
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
      '/images/Remera Polo Classic/Remera Polo azul.png',
      '/images/Remera Polo Classic/Mockup hiperrealista.png'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image:'/images/Remera Polo Classic/Remera Polo blanco.png' },
      { name: 'Negro', hex: '#1a1a1a', image:'/images/Remera Polo Classic/Remera Polo negra.png' },
      { name: 'Azul Royal', hex: '#4169E1', image:'/images/Remera Polo Classic/Remera Polo azul.png' },
      { name: 'Verde Bosque', hex: '#228B22', image:'/images/Remera Polo Classic/Remera Polo verde bosque.png' }
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
      '/images/Remera Rayas Náutica/8155928e-e03d-4fed-ab13-685f07543017.png',
      '/images/Remera Rayas Náutica/48d6c071-0667-446a-bc87-78e26bf124d2.png',
      '/images/Remera Rayas Náutica/8a9394e4-df04-47c1-905d-dc5105d51b45.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Azul/Blanco', hex: '#1e40af', image: '/images/Remera Rayas Náutica/8a9394e4-df04-47c1-905d-dc5105d51b45.png' },
      { name: 'Negro/Blanco', hex: '#1a1a1a', image: '/images/Remera Rayas Náutica/48d6c071-0667-446a-bc87-78e26bf124d2.png' }
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
      '/images/Camisas oxford/Camisa Oxford azul.png',
      '/images/Camisas oxford/Camisa Oxford celeste.png',
      '/images/Camisas oxford/Camisa Oxford clásic.png',
      '/images/Camisas oxford/Mockup camisa.png'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Camisas oxford/Camisa Oxford celeste.png' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Camisas oxford/Camisa Oxford clásic.png' },
      { name: 'Rosa', hex: '#FFC0CB', image: '/images/Camisas oxford/Camisa Oxford rosa.png' },
      { name: 'Rayado Azul', hex: '#6495ED', image: '/images/Camisas oxford/Camisa Oxford azul.png' }
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
      '/images/Camisa Lino/Camisa Lino blanco.png',
      '/images/Camisa Lino/Camisa Lino arena.png',
      '/images/Camisa Lino/Camisa Lino celeste.png',
      '/images/Camisa Lino/Camisa Lino mockup.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Camisa Lino/Camisa Lino blanco.png' },
      { name: 'Arena', hex: '#C2B280', image: '/images/Camisa Lino/Camisa Lino arena.png' },
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Camisa Lino/Camisa Lino celeste.png' }
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
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano mockup.jpg',
      '/images/Camisas oxford/Mockup camisa.png'
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
      '/images/Franela Escocesa/Franela Escocesa mockup.png',
      '/images/Franela Escocesa/Franela Escocesa rojo-negro.png',
      '/images/Franela Escocesa/Franela Escocesa verde negro.png',
      '/images/Franela Escocesa/Franela Escocesa azul-gris.png'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Rojo/Negro', hex: '#8B0000', image: '/images/Franela Escocesa/Franela Escocesa rojo-negro.png' },
      { name: 'Verde/Negro', hex: '#006400', image: '/images/Franela Escocesa/Franela Escocesa verde negro.png' },
      { name: 'Azul/Gris', hex: '#4682B4', image: '/images/Franela Escocesa/Franela Escocesa azul-gris.png' }
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
      '/images/Slim Stretch/Slim Stretch mockup.png',
      '/images/Slim Stretch/Slim Stretch blanco.png',
      '/images/Slim Stretch/Slim Stretch gris perla.png',
      '/images/Slim Stretch/Slim Stretch negro.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Slim Stretch/Slim Stretch blanco.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Slim Stretch/Slim Stretch negro.png' },
      { name: 'Gris Perla', hex: '#C0C0C0', image: '/images/Slim Stretch/Slim Stretch gris perla.png' }
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
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano blanco.jpg',
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano celeste.jpg',
      '/images/Camisa Cuello Italiano/Camisa Cuello Italiano mockup.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Camisa Cuello Italiano/Camisa Cuello Italiano blanco.jpg' },
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Camisa Cuello Italiano/Camisa Cuello Italiano celeste.jpg' }
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
      '/images/pantalon chino slim/pantalon chino slim navy.png',
      '/images/pantalon chino slim/pantalon chino slim mockup.png'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Beige', hex: '#D4A574', image: '/images/pantalon chino slim/pantalon chino slim beige.png' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/pantalon chino slim/pantalon chino slim navy.png' },
      { name: 'Oliva', hex: '#556B2F', image: '/images/pantalon chino slim/pantalon chino slim oliva.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/pantalon chino slim/pantalon chino slim negro.png' }
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
      '/images/Pantalón Formal Lana/Pantalón Formal Lana mockup.png',
      '/images/Pantalón Formal Lana/Pantalón Formal Lana gris.png',
      '/images/Pantalón Formal Lana/Pantalón Formal Lana navy.png',
      '/images/Pantalón Formal Lana/Pantalón Formal Lana negro.png'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Gris', hex: '#6b7280', image: '/images/Pantalón Formal Lana/Pantalón Formal Lana gris.png' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Pantalón Formal Lana/Pantalón Formal Lana navy.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Pantalón Formal Lana/Pantalón Formal Lana negro.png' }
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
      '/images/Pantalon Cargo Modern/Cargo Modern mockup.png',
      '/images/Pantalon Cargo Modern/Cargo Modern oliva.png',
      '/images/Pantalon Cargo Modern/Cargo Modern camel.png',
      '/images/Pantalon Cargo Modern/Cargo Modern negro.png'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Oliva', hex: '#556B2F', image: '/images/Pantalon Cargo Modern/Cargo Modern oliva.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Pantalon Cargo Modern/Cargo Modern negro.png' },
      { name: 'Camel', hex: '#C19A6B', image: '/images/Pantalon Cargo Modern/Cargo Modern camel.png' }
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
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium negro.png',
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium gris melenge.png',
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium navy.png',
      '/images/Pantalón Jogger Premium/Pantalón Jogger Premium mockup.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Pantalón Jogger Premium/Pantalón Jogger Premium negro.png' },
      { name: 'Gris Melange', hex: '#9ca3af', image: '/images/Pantalón Jogger Premium/Pantalón Jogger Premium gris melenge.png' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Pantalón Jogger Premium/Pantalón Jogger Premium navy.png' }
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
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado blanco.png',
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado.png',
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado celeste.png',
      '/images/Pantalón Lino Relajado/Pantalón Lino Relajado Mockup.png'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Pantalón Lino Relajado/Pantalón Lino Relajado blanco.png' },
      { name: 'Beige', hex: '#F5F5DC', image: '/images/Pantalón Lino Relajado/Pantalón Lino Relajado.png' },
      { name: 'Celeste', hex: '#87CEEB', image: '/images/Pantalón Lino Relajado/Pantalón Lino Relajado celeste.png' }
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
      '/images/Jean Straight Premium/Jean Straight Indigo.png',
      '/images/Jean Straight Premium/Jean Straight Negro.png',
      '/images/Jean Straight Premium/Jean Straight Azul Claro.png',
      '/images/Jean Straight Premium/Mockup_jean.png'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Índigo', hex: '#3F51B5', image: '/images/Jean Straight Premium/Jean Straight Indigo.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Jean Straight Premium/Jean Straight Negro.png' },
      { name: 'Azul Claro', hex: '#6495ED', image: '/images/Jean Straight Premium/Jean Straight Azul Claro.png' }
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
      '/images/Jean skinny/Jean skinny dark blue.png',
      '/images/Jean skinny/Jean skinny negro.png',
      '/images/Jean skinny/mockup modelo jean skinny.png'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Dark Blue', hex: '#1a1a3e', image: '/images/Jean skinny/Jean skinny dark blue.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Jean skinny/Jean skinny negro.png' }
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
      '/images/Jean Slim Fit Classic/Slim Fit Classic azul medio.png',
      '/images/Jean Slim Fit Classic/Slim Fit Classic azul claro.png',
      '/images/Jean Slim Fit Classic/Mockup Slim Fit Classic.png'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Azul Medio', hex: '#4169E1', image: '/images/Jean Slim Fit Classic/Slim Fit Classic azul medio.png' },
      { name: 'Azul Claro', hex: '#87CEEB', image: '/images/Jean Slim Fit Classic/Slim Fit Classic azul claro.png' }
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
      '/images/Jean Relaxed Vintage/c91417ee-e8f0-4dde-bebe-f43ef4dd11b7.png',
      '/images/Jean Relaxed Vintage/e2049900-7238-4c6c-88a8-1ca3980982f6.png',
      '/images/Jean Relaxed Vintage/Mockuo Relaxed Vintage.png'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Vintage Blue', hex: '#6B8E9F', image: '/images/Jean Relaxed Vintage/c91417ee-e8f0-4dde-bebe-f43ef4dd11b7.png' },
      { name: 'Stone Wash', hex: '#8B8B8B', image: '/images/Jean Relaxed Vintage/e2049900-7238-4c6c-88a8-1ca3980982f6.png' }
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
      '/images/Jean Negro Essential/Jean essential negro.png',
      '/images/Jean Negro Essential/Jean essential claro.png',
      '/images/Jean Negro Essential/mockup Jean Essential.png'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Jean Negro Essential/Jean essential negro.png' },
      { name: 'Gris Oscuro', hex: '#374151', image: '/images/Jean Negro Essential/Jean essential claro.png' }
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
      '/images/Urban Classic/Urban Classic blanco.png',
      '/images/Urban Classic/Urban Classic gris.png',
      '/images/Urban Classic/Urban Classic negro.png',
      '/images/Urban Classic/Urban Classic mockup.png'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Urban Classic/Urban Classic blanco.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Urban Classic/Urban Classic negro.png' },
      { name: 'Gris', hex: '#6b7280', image: '/images/Urban Classic/Urban Classic gris.png' }
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
      '/images/Derby Cuero/Derby Cuero cognac.png',
      '/images/Derby Cuero/Derby Cuero marron.png',
      '/images/Derby Cuero/Derby Cuero Negro.png',
      '/images/Derby Cuero/Derby Cuero mockup.png'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Cognac', hex: '#9A463D', image: '/images/Derby Cuero/Derby Cuero cognac.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Derby Cuero/Derby Cuero Negro.png' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Derby Cuero/Derby Cuero marron.png' }
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
      '/images/Mocasines Penny Loafer/Penny Loafer burgundy.png',
      '/images/Mocasines Penny Loafer/Penny Loafer negro.png',
      '/images/Mocasines Penny Loafer/Penny Loafer tan.png',
      '/images/Mocasines Penny Loafer/Penny Loafer mockup.png'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Burgundy', hex: '#722F37', image: '/images/Mocasines Penny Loafer/Penny Loafer burgundy.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Mocasines Penny Loafer/Penny Loafer negro.png' },
      { name: 'Tan', hex: '#D2B48C', image: '/images/Mocasines Penny Loafer/Penny Loafer tan.png' }
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
      '/images/Botas Chelsea/Botas Chelsea negro.png',
      '/images/Botas Chelsea/Botas Chelsea marron.png',
      '/images/Botas Chelsea/Botas Chelsea gamuza fris.png',
      '/images/Botas Chelsea/Botas Chelsea mockup.png'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Botas Chelsea/Botas Chelsea negro.png' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Botas Chelsea/Botas Chelsea marron.png' },
      { name: 'Gamuza Gris', hex: '#6b7280', image: '/images/Botas Chelsea/Botas Chelsea gamuza fris.png' }
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
      '/images/Sneakers Running Tech/Sneakers Running Tech negro.png',
      '/images/Sneakers Running Tech/Sneakers Running Tech gris-azul.png',
      '/images/Sneakers Running Tech/Sneakers Running Tech blanco total.png',
      '/images/Sneakers Running Tech/Sneakers Running Tech Mockup.png'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Negro/Blanco', hex: '#1a1a1a', image: '/images/Sneakers Running Tech/Sneakers Running Tech negro.png' },
      { name: 'Gris/Azul', hex: '#6b7280', image: '/images/Sneakers Running Tech/Sneakers Running Tech gris-azul.png' },
      { name: 'Blanco Total', hex: '#FFFFFF', image: '/images/Sneakers Running Tech/Sneakers Running Tech blanco total.png' }
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
      '/images/Alpargatas Premium/Alpargatas Premium blanco.jpg',
      '/images/Alpargatas Premium/Alpargatas Premium navy.jpg',
      '/images/Alpargatas Premium/Alpargatas Premium natural.jpg',
      '/images/Alpargatas Premium/Alpargatas Premium mockup.jpg'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Alpargatas Premium/Alpargatas Premium navy.jpg' },
      { name: 'Blanco', hex: '#FFFFFF', image: '/images/Alpargatas Premium/Alpargatas Premium blanco.jpg' },
      { name: 'Natural', hex: '#D4A574', image: '/images/Alpargatas Premium/Alpargatas Premium natural.jpg' }
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
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano negro.png',
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano marron.png',
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano cognac.png',
      '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano mockup.png'
    ],
    sizes: ['85', '90', '95', '100', '105', '110'],
    colors: [
      { name: 'Marrón', hex: '#8B4513', image: '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano marron.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano negro.png' },
      { name: 'Cognac', hex: '#9A463D', image: '/images/Cinturón Cuero Italiano/Cinturón Cuero Italiano cognac.png' }
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
      '/images/Reloj Minimalista/Reloj Minimalista plateado.png',
      '/images/Reloj Minimalista/Reloj Minimalista dorado.png',
      '/images/Reloj Minimalista/Reloj Minimalista negro.png',
      '/images/Reloj Minimalista/Reloj Minimalista mockup.png'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Plateado', hex: '#C0C0C0', image: '/images/Reloj Minimalista/Reloj Minimalista plateado.png' },
      { name: 'Dorado', hex: '#FFD700', image: '/images/Reloj Minimalista/Reloj Minimalista dorado.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Reloj Minimalista/Reloj Minimalista negro.png' }
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
      '/images/Billetera Cuero Premium/Billetera Cuero Premium negro.png',
      '/images/Billetera Cuero Premium/Billetera Cuero Premium marron.png',
      '/images/Billetera Cuero Premium/Billetera Cuero Premium cafe.png',
      '/images/Billetera Cuero Premium/Billetera Cuero Premium mockup.png'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Billetera Cuero Premium/Billetera Cuero Premium negro.png' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Billetera Cuero Premium/Billetera Cuero Premium marron.png' },
      { name: 'Café', hex: '#6F4E37', image: '/images/Billetera Cuero Premium/Billetera Cuero Premium cafe.png' }
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
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador dorado.png',
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador gris.png',
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador negro.png',
      '/images/Gafas de Sol Aviador/Gafas de Sol Aviador mockup.png'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Dorado/Marrón', hex: '#FFD700', image: '/images/Gafas de Sol Aviador/Gafas de Sol Aviador dorado.png' },
      { name: 'Plateado/Gris', hex: '#C0C0C0', image: '/images/Gafas de Sol Aviador/Gafas de Sol Aviador gris.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Gafas de Sol Aviador/Gafas de Sol Aviador negro.png' }
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
      '/images/mochila urban cuero/mochila urban cuero negro.jpg',
      '/images/mochila urban cuero/mochila urban cuero mockup.png'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/mochila urban cuero/mochila urban cuero negro.png' },
      { name: 'Marrón Vintage', hex: '#8B4513', image: '/images/mochila urban cuero/mochila urban cuero marron.jpg' }
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
      '/images/Bufanda Lana Merino/Bufanda Lana Merino gris.png',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino negro.png',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino camel.png',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino borgoña.jpg',
      '/images/Bufanda Lana Merino/Bufanda Lana Merino mockup.png'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Gris', hex: '#6b7280', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino gris.png' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino negro.png' },
      { name: 'Camel', hex: '#C19A6B', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino camel.png' },
      { name: 'Borgoña', hex: '#722F37', image: '/images/Bufanda Lana Merino/Bufanda Lana Merino borgoña.jpg' }
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
      '/images/Corbata Seda Italiana/Corbata Seda Italiana navy.jpg',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana borgoña.jpg',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana gris.jpg',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana negro.png',
      '/images/Corbata Seda Italiana/Corbata Seda Italiana mockup.png'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana navy.jpg' },
      { name: 'Borgoña', hex: '#722F37', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana borgoña.jpg' },
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana negro.png' },
      { name: 'Gris', hex: '#6b7280', image: '/images/Corbata Seda Italiana/Corbata Seda Italiana gris.jpg' }
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
      '/images/Gorra Baseball Premium/Gorra Baseball Premium negro.png',
      '/images/Gorra Baseball Premium/Gorra Baseball Premium navy.jpg',
      '/images/Gorra Baseball Premium/Gorra Baseball Premium beige.jpg',
      '/images/Gorra Baseball Premium/Gorra Baseball Premium mockup.png'
    ],
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Gorra Baseball Premium/Gorra Baseball Premium negro.png' },
      { name: 'Navy', hex: '#1e3a5f', image: '/images/Gorra Baseball Premium/Gorra Baseball Premium navy.jpg' },
      { name: 'Beige', hex: '#F5F5DC', image: '/images/Gorra Baseball Premium/Gorra Baseball Premium beige.jpg' }
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
      '/images/Guantes Cuero Touch/Guantes Cuero Touch negro.png',
      '/images/Guantes Cuero Touch/Guantes Cuero Touch marron.jpg',
      '/images/Guantes Cuero Touch/Guantes Cuero Touch mockup.png'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a', image: '/images/Guantes Cuero Touch/Guantes Cuero Touch negro.png' },
      { name: 'Marrón', hex: '#8B4513', image: '/images/Guantes Cuero Touch/Guantes Cuero Touch marron.jpg' }
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
