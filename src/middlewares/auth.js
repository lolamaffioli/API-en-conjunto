// src/middlewares/auth.middleware.js

export const authMiddleware = (req, res, next) => {
  // Simulamos que el usuario ya pasó por el login y viene en el token
  req.user = {
    id: "user_test_123",
    name: "Programador Remoto",
    email: "test@remoto.com"
  };

  // next() le dice a Express que continúe al controlador
  next();
};