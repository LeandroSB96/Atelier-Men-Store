import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: { orderBy: { order: 'asc' } },
        colors: true,
        sizes: true,
      }
    });
    res.json({ products });
  } catch (error) {
    console.error('Error detallado:', error);
    res.status(500).json({ error: String(error) });
  }
};