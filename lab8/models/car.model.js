// module.exports = class Car {
//     constructor(id,model,fuel,desc,price){
//         this.id = id;
//         this.model = model;
//         this.fuel = fuel;
//         this.desc = desc;
//         this.price = price;
//     }
// };

const mongoose = require('mongoose');

const Car = mongoose.model(
    'Car',
    new mongoose.Schema({
        name: String,
        description: String,
        price: Number
    }),
);