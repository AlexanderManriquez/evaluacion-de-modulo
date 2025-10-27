const express = require('express');
const { testConnection, sequelize } = require('./db');
const rolRoutes = require('./routes/rolRoutes');

const app = express();
app.use(express.json());

app.use('/roles', rolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  await testConnection();
});