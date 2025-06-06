const express = require('express');

const app = express ();
const path = require('path');
const puerto = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index'); 
});



app.listen(puerto, () => {
  console.log(`Servidor Express en http://localhost:${puerto}`);
});