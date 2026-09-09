const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
  res.send('Servidor Node.js con Express activo');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
