import { PrismaClient } from '@prisma/client';
import { frontendProducts } from './productsData';

declare const process: { exit(code?: number): never };

const prisma = new PrismaClient();

interface FrontendProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  isNew?: boolean;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
}

async function main() {
  console.log('🌱 Iniciando seed...');

  await prisma.productSize.deleteMany();
  await prisma.productColor.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  for (const item of frontendProducts as FrontendProduct[]) {
    const product = await prisma.product.create({
      data: {
        name: item.name,
        slug: item.name.toLowerCase().replace(/\s+/g, '-'),
        description: item.description,
        price: item.price,
        category: item.category,
        stock: item.stock,
        isNew: item.isNew ?? false,
      }
    });

    await prisma.productImage.createMany({
      data: item.images.map((url: string, index: number) => ({
        productId: product.id,
        url,
        order: index,
      }))
    });

    await prisma.productColor.createMany({
      data: item.colors.map((color: { name: string; hex: string; image?: string}) => ({
        productId: product.id,
        name: color.name,
        hex: color.hex,
        imageUrl: color.image,
      }))
    });

    await prisma.productSize.createMany({
      data: item.sizes.map((size: string) => ({
        productId: product.id,
        size,
      }))
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