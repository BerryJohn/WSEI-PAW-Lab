const Product = require('../models/product.model');

let products = [];

exports.getAll = (req,res) => {
    res.status(200).send(products);
}

exports.add = (req,res) => {
    const product = new Product(req.body.id, req.body.name, req.body.desc, req.body.price)
    products.push(product);

    res.status(201).send(product);
}
exports.update = (req,res) => {
    const objIndex = products.findIndex(el => el.id === req.body.id);
    products[objIndex].name = req.body.name;
    products[objIndex].desc = req.body.desc;
    products[objIndex].price = req.body.price;

    res.status(202).send(products);
}
exports.delete = (req,res) => {
    const newProducts = products.filter(el => el.id != req.params.id);
    products = newProducts;
    res.status(202).send(products);
}