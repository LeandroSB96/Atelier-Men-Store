import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: 'No autorizado' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      role: string;
    };

    req.userId = decoded.userId;
    req.userRole = decoded.role;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};