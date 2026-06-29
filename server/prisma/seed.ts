import { PrismaClient } from '@prisma/client';

declare const process: { exit(code?: number): never };

const prisma = new PrismaClient();

const products = [
  {
    name: 'Remera Essential Algodón',
    slug: 'remera-essential-algodon',
    description: 'Remera de algodón premium con corte clásico',
    price: 12900,
    category: 'Remeras',
    stock: 50,
    isNew: true,
    isFeatured: true,
  },
  {
    name: 'Pantalón Chino Slim',
    slug: 'pantalon-chino-slim',
    description: 'Pantalón chino de corte slim moderno',
    price: 29900,
    category: 'Pantalones',
    stock: 30,
    isNew: false,
    isFeatured: true,
  },
  {
    name: 'Camisa Oxford Clásica',
    slug: 'camisa-oxford-clasica',
    description: 'Camisa Oxford de algodón para ocasiones formales',
    price: 24900,
    category: 'Camisas',
    stock: 40,
    isNew: false,
    isFeatured: false,
  },
];

async function main() {
  console.log('🌱 Iniciando seed...');

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
    console.log(`✅ Creado: ${product.name}`);
  }

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