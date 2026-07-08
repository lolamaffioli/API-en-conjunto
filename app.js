// app.js
import express from 'express';
import boardRoutes from './modules/boards/boards.routes.js';
import listRoutes from './modules/lists/lists.routes.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

// 1. Middleware global para entender formato JSON
app.use(express.json());

// 2. Aplicamos el Middleware de Autenticación de forma global 
// (Así todas tus rutas de tableros y listas ya tendrán acceso a req.user)
app.use(authMiddleware);

// 3. Rutas de tus módulos
app.use('/api/boards', boardRoutes);
app.use('/api/lists', listRoutes);

// 4. Middleware de manejo de errores (SIEMPRE va al final de todas las rutas)
app.use(errorHandler);

export default app;