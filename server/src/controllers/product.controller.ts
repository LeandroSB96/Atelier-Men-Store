import { Request, Response } from 'express';
import prisma from '../config/prisma';

// Por ahora usamos datos fake
const products = [
  { id: '1', name: 'Remera Essential', price: 12900 },
  { id: '2', name: 'Pantalón Chino', price: 29900 }
];

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany(); 
    res.json({ products });
  } catch (error) {
  console.error('Error detallado:', error);
  res.status(500).json({ error: String(error) });
}
};