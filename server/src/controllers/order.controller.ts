import { Request, Response } from 'express';
import prisma from '../config/prisma';

interface OrderItemInput {
  productId: string;
  productName: string;
  quantity: number;
  size: string;
  color: string;
  price: number;
}

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      customerName,
      customerEmail,
      paymentMethod,
      shippingStreet,
      shippingCity,
      shippingZipCode,
      items,
    } = req.body;

    if (!customerName || !customerEmail || !items || items.length === 0) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    const total = items.reduce(
      (sum: number, item: OrderItemInput) => sum + item.price * item.quantity,
      0
    );

    const order = await prisma.order.create({
      data: {
        customerName,
        customerEmail,
        paymentMethod,
        shippingStreet,
        shippingCity,
        shippingZipCode,
        total,
        items: {
          create: items.map((item: OrderItemInput) => ({
            productId: item.productId,
            productName: item.productName,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            price: item.price,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    res.status(201).json({ order });
  } catch (error) {
    console.error('Error al crear orden:', error);
    res.status(500).json({ error: 'Error al crear la orden' });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json({ orders });
  } catch (error) {
    console.error('Error al obtener órdenes:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes' });
  }
};