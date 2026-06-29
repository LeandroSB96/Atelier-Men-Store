import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:8080',
    'http://192.168.1.38:8080',
    'http://192.168.1.38:5173',
  ],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Atelier Men Store API',
    version: '1.0.0'
  });
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
});