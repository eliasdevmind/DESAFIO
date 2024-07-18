// app.js
const express = require('express');
const pool = require('./db');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const destinosResult = await pool.query('SELECT * FROM Destino');
    const destinos = destinosResult.rows;

    for (let destino of destinos) {
      const atrativosResult = await pool.query('SELECT * FROM Atrativo WHERE destino_id = $1', [destino.id]);
      destino.atrativos = atrativosResult.rows;
    }

    res.render('index', { destinos: destinos });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
