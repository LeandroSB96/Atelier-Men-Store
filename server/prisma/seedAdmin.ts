import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

declare const process: { exit(code?: number): never };

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Creando usuario admin...');

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@ateliermen.com' },
    update: {},
    create: {
      email: 'admin@ateliermen.com',
      password: hashedPassword,
      name: 'Administrador',
      role: 'ADMIN',
    },
  });

  console.log(`✅ Usuario admin creado: ${admin.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });