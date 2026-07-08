// src/middlewares/error.middleware.js

export const errorHandler = (err, req, res, next) => {
  console.error(`❌ Error detectado: ${err.message}`);
  
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message: err.message || "Error interno del servidor",
    // Solo mostramos el stack trace si no estamos en producción
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};