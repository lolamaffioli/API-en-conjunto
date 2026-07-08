// server.js
import app from './app.js';

// Usamos el puerto 3000 por defecto o el que defina el entorno de despliegue
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📌 Endpoints de Tableros listos en http://localhost:${PORT}/api/boards`);
  console.log(`📌 Endpoints de Listas listos en http://localhost:${PORT}/api/lists`);
});