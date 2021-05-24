const express = require('express');

const app = express();
app.use(express.json());

const routes = require('./routes/product.routes')(app);

app.listen(8080, () => console.log('server started'));