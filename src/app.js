const express = require('express');
const { testConnection, sequelize } = require('./db');
const { Usuario, Rol } = require('./models');

const app = express();
app.use(express.json());

(async () => {
  await testConnection();

  await sequelize.sync({ alter: true });
  console.log('Modelos sincronizados con la base de datos.');

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
})();