const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: 'admin',
  password: 'secret',
  database: 'tiendadb',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('<h1>API activa conectada a PostgreSQL</h1>');
});

app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/productos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(9000, () => {
  console.log('Servidor corriendo en puerto 9000');
});
