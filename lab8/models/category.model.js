// module.exports = class Product {
//     constructor(id, name, desc, price)
//     {
//         this.id = id;
//         this.name = name;
//         this.desc = desc;
//         this.price = price;
//     }
// };

const mongoose = require('mongoose');

const Category = mongoose.model(
    'Category',
    new mongoose.Schema({
        name: String,
    }),
);

module.exports = Category;