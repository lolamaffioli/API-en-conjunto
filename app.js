import express from 'express';
import boardRoutes from './src/modules/boards/routes.js';
import listRoutes from './src/modules/lists/routes.js';
import cardRoutes from './src/modules/cards/routes.js';

import authRoutes from './src/routes/auth.routes.js';
import historyRoutes from './src/routes/history.routes.js';

import { authMiddleware } from './src/middlewares/auth.js';
import { errorHandler } from './src/middlewares/error.js';

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas públicas (NO requieren token)
app.use('/auth', authRoutes);

// A partir de acá todas requieren autenticación
app.use(authMiddleware);

// Tus módulos
app.use('/api/boards', boardRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/cards', cardRoutes);

// Tu módulo de historial
app.use('/api/history', historyRoutes);

// Manejo de errores
app.use(errorHandler);

export default app;