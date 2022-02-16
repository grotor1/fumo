const fumos = require('./fumos');
const express = require('express');

const app = express();

app.use(express.json({extended: true}));

app.get('/*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.status(200).json(fumos[Math.floor(Math.random() * fumos.length)])
})

const PORT = process.env.PORT || 5000

function start() {
  try {
    app.listen(PORT, () => console.log(`On air. Port: ${PORT}`))
  } catch (e) {
    console.log('Error', e.message)
    process.exit(1);
  }
}

start()
