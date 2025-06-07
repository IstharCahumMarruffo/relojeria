const express = require('express');

const app = express ();
const path = require('path');
const puerto = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));


app.use('/', require('./router/rutas'));

app.listen(puerto, () => {
  console.log(`Servidor Express en http://localhost:${puerto}`);
});
