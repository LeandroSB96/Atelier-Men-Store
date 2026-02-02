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
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
    description: 'Camisas elegantes para toda ocasión'
  },
  {
    id: '3',
    name: 'Pantalones',
    slug: 'pantalones',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600',
    description: 'Pantalones de vestir y casuales'
  },
  {
    id: '4',
    name: 'Jeans',
    slug: 'jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600',
    description: 'Jeans de calidad superior'
  },
  {
    id: '5',
    name: 'Calzado',
    slug: 'calzado',
    image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600',
    description: 'Zapatos y zapatillas de diseño'
  },
  {
    id: '6',
    name: 'Accesorios',
    slug: 'accesorios',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
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
      '/images/remeras/Remera Essential negro.png'
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
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Crema', hex: '#F5F5DC' },
      { name: 'Oliva', hex: '#556B2F' }
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
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Borgoña', hex: '#722F37' },
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Gris Oscuro', hex: '#374151' }
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
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Azul Marino', hex: '#0f172a' }
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
      'https://images.unsplash.com/photo-1625910513413-5fc84f2df70f?w=800',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Azul Royal', hex: '#4169E1' },
      { name: 'Verde Bosque', hex: '#228B22' }
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
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
      'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Azul/Blanco', hex: '#1e40af' },
      { name: 'Negro/Blanco', hex: '#1a1a1a' }
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
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Celeste', hex: '#87CEEB' },
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Rosa', hex: '#FFC0CB' },
      { name: 'Rayado Azul', hex: '#6495ED' }
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
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800',
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Arena', hex: '#C2B280' },
      { name: 'Celeste', hex: '#87CEEB' }
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
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800'
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
      'https://images.unsplash.com/photo-1608234808654-2a8875faa7fd?w=800',
      'https://images.unsplash.com/photo-1604695573706-53170668f6a6?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Rojo/Negro', hex: '#8B0000' },
      { name: 'Verde/Negro', hex: '#006400' },
      { name: 'Azul/Gris', hex: '#4682B4' }
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
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris Perla', hex: '#C0C0C0' }
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
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Celeste', hex: '#87CEEB' }
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
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Beige', hex: '#D4A574' },
      { name: 'Navy', hex: '#1e3a5f' },
      { name: 'Oliva', hex: '#556B2F' },
      { name: 'Negro', hex: '#1a1a1a' }
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
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Gris', hex: '#6b7280' },
      { name: 'Navy', hex: '#1e3a5f' },
      { name: 'Negro', hex: '#1a1a1a' }
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
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Oliva', hex: '#556B2F' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Camel', hex: '#C19A6B' }
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
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris Melange', hex: '#9ca3af' },
      { name: 'Navy', hex: '#1e3a5f' }
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
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Beige', hex: '#F5F5DC' },
      { name: 'Celeste', hex: '#87CEEB' }
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
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Índigo', hex: '#3F51B5' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Azul Claro', hex: '#6495ED' }
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
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Dark Blue', hex: '#1a1a3e' },
      { name: 'Negro', hex: '#1a1a1a' }
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
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Azul Medio', hex: '#4169E1' },
      { name: 'Azul Claro', hex: '#87CEEB' }
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
      'https://images.unsplash.com/photo-1604176424472-17cd740f74e9?w=800',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Vintage Blue', hex: '#6B8E9F' },
      { name: 'Stone Wash', hex: '#8B8B8B' }
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
      'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800'
    ],
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris Oscuro', hex: '#374151' }
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
      'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris', hex: '#6b7280' }
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
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Cognac', hex: '#9A463D' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#8B4513' }
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
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Burgundy', hex: '#722F37' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Tan', hex: '#D2B48C' }
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
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800',
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#8B4513' },
      { name: 'Gamuza Gris', hex: '#6b7280' }
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
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Negro/Blanco', hex: '#1a1a1a' },
      { name: 'Gris/Azul', hex: '#6b7280' },
      { name: 'Blanco Total', hex: '#FFFFFF' }
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
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800',
      'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800'
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Navy', hex: '#1e3a5f' },
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Natural', hex: '#D4A574' }
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
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800'
    ],
    sizes: ['85', '90', '95', '100', '105', '110'],
    colors: [
      { name: 'Marrón', hex: '#8B4513' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Cognac', hex: '#9A463D' }
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
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Plateado', hex: '#C0C0C0' },
      { name: 'Dorado', hex: '#FFD700' },
      { name: 'Negro', hex: '#1a1a1a' }
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
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#8B4513' },
      { name: 'Café', hex: '#6F4E37' }
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
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Dorado/Marrón', hex: '#FFD700' },
      { name: 'Plateado/Gris', hex: '#C0C0C0' },
      { name: 'Negro', hex: '#1a1a1a' }
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
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón Vintage', hex: '#8B4513' }
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
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Gris', hex: '#6b7280' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Borgoña', hex: '#722F37' }
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
      'https://images.unsplash.com/photo-1589756823695-278bc923f962?w=800',
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800'
    ],
    sizes: ['Único'],
    colors: [
      { name: 'Navy', hex: '#1e3a5f' },
      { name: 'Borgoña', hex: '#722F37' },
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Gris', hex: '#6b7280' }
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
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800',
      'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800'
    ],
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Navy', hex: '#1e3a5f' },
      { name: 'Beige', hex: '#F5F5DC' }
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
      'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?w=800',
      'https://images.unsplash.com/photo-1520180344637-7aa2cd42bbb5?w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro', hex: '#1a1a1a' },
      { name: 'Marrón', hex: '#8B4513' }
    ],
    stock: 20,
    isNew: true
  }
];

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
