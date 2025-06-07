const express = require('express');

const app = express ();
const path = require('path');
const puerto = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB conectado');
}).catch(err => {
  console.error('Error conectando a MongoDB:', err);
});


app.get('/', (req, res) => {
  res.render('index'); 
});



app.listen(puerto, () => {
  console.log(`Servidor Express en http://localhost:${puerto}`);
});
