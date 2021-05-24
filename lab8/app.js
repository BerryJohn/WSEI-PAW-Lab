const express = require('express');

const app = express();
app.use(express.json());

const routesProduct = require('./routes/product.routes')(app);
const routesCar = require('./routes/car.routes')(app);

app.listen(8080, () => console.log('server started'));