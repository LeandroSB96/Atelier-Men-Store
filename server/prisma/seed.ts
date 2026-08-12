import { PrismaClient } from '@prisma/client';

declare const process: { exit(code?: number): never };

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  await prisma.productSize.deleteMany();
  await prisma.productColor.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  // Producto 1: Remera
  const remera = await prisma.product.create({
    data: {
      name: 'Remera Essential Algodón',
      slug: 'remera-essential-algodon',
      description: 'Remera básica de algodón peinado 100%. Corte regular fit con cuello redondo reforzado.',
      price: 12900,
      category: 'Remeras',
      stock: 45,
      isNew: true,
      isFeatured: true,
    }
  });

  await prisma.productImage.createMany({
    data: [
      { productId: remera.id, url: '/images/remeras/Remera Essential negro.png', order: 0 },
      { productId: remera.id, url: '/images/remeras/Modelo remera negra.png', order: 1 },
    ]
  });

  await prisma.productColor.createMany({
    data: [
      { productId: remera.id, name: 'Negro', hex: '#1a1a1a' },
      { productId: remera.id, name: 'Blanco', hex: '#FFFFFF' },
      { productId: remera.id, name: 'Gris', hex: '#6b7280' },
    ]
  });

  await prisma.productSize.createMany({
    data: [
      { productId: remera.id, size: 'S' },
      { productId: remera.id, size: 'M' },
      { productId: remera.id, size: 'L' },
      { productId: remera.id, size: 'XL' },
    ]
  });

  console.log(`✅ Creado: ${remera.name}`);

  // Producto 2: Pantalón
  const pantalon = await prisma.product.create({
    data: {
      name: 'Pantalón Chino Slim',
      slug: 'pantalon-chino-slim',
      description: 'Pantalón chino de corte slim moderno. Tela liviana y cómoda.',
      price: 29900,
      category: 'Pantalones',
      stock: 30,
      isNew: false,
      isFeatured: true,
    }
  });

  await prisma.productImage.createMany({
    data: [
      { productId: pantalon.id, url: '/images/pantalones/pantalon-chino-beige.png', order: 0 },
    ]
  });

  await prisma.productColor.createMany({
    data: [
      { productId: pantalon.id, name: 'Beige', hex: '#d4b896' },
      { productId: pantalon.id, name: 'Negro', hex: '#1a1a1a' },
    ]
  });

  await prisma.productSize.createMany({
    data: [
      { productId: pantalon.id, size: '30' },
      { productId: pantalon.id, size: '32' },
      { productId: pantalon.id, size: '34' },
    ]
  });

  console.log(`✅ Creado: ${pantalon.name}`);

  // Producto 3: Camisa
  const camisa = await prisma.product.create({
    data: {
      name: 'Camisa Oxford Clásica',
      slug: 'camisa-oxford-clasica',
      description: 'Camisa Oxford de algodón para ocasiones formales e informales.',
      price: 24900,
      category: 'Camisas',
      stock: 40,
      isNew: false,
      isFeatured: false,
    }
  });

  await prisma.productImage.createMany({
    data: [
      { productId: camisa.id, url: '/images/camisas/camisa-oxford-blanca.png', order: 0 },
    ]
  });

  await prisma.productColor.createMany({
    data: [
      { productId: camisa.id, name: 'Blanco', hex: '#FFFFFF' },
      { productId: camisa.id, name: 'Celeste', hex: '#7eb8d4' },
    ]
  });

  await prisma.productSize.createMany({
    data: [
      { productId: camisa.id, size: 'S' },
      { productId: camisa.id, size: 'M' },
      { productId: camisa.id, size: 'L' },
    ]
  });

  console.log(`✅ Creado: ${camisa.name}`);
  console.log('🎉 Seed completado!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });