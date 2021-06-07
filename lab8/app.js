const express = require('express');
const dbConfig = require('./config/db.config');


const app = express();
app.use(express.json());

const db = require('./models');

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true,
}).then(() => console.log('connected to db'))
  .catch(err => {
    console.log(`Error: ${err}`);
    process.exit();
});

const routesProduct = require('./routes/product.routes')(app);
const routesCar = require('./routes/car.routes')(app);
const routesCategories = require('./routes/category.routes')(app);

app.listen(8080, () => console.log('server started'));