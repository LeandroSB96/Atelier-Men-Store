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

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        images: { orderBy: { order: 'asc' } },
        colors: true,
        sizes: true,
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ product });
  } catch (error) {
    console.error('Error detallado:', error);
    res.status(500).json({ error: String(error) });
  }
};