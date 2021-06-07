// const Product = require('../models/product.model');

// let products = [];

// exports.getAll = (req,res) => {
//     res.status(200).send(products);
// };

// exports.add = (req,res) => {
//     const product = new Product(req.body.id, req.body.name, req.body.desc, req.body.price)
//     products.push(product);

//     res.status(201).send(product);
// };

// exports.update = (req,res) => {
//     const objIndex = products.findIndex(el => el.id === req.body.id);
//     products[objIndex].name = req.body.name;
//     products[objIndex].desc = req.body.desc;
//     products[objIndex].price = req.body.price;

//     res.status(202).send(products);
// };

// exports.delete = (req,res) => {
//     const newProducts = products.filter(el => el.id != req.params.id);
//     products = newProducts;
//     res.status(202).send(products);
// };

// const { product } = require('../models');
const Product = require('../models/product.model');
const Category = require('../models/category.model');

exports.getAll = (req,res) => {
    // Product.find({name: "Telewizor"}).exec();
    Product.find().populate('category').exec((err,products) => {
        res.status(200).send(products);
    });
};

exports.add = (req,res) => {
    Category.findOne({_id: req.body.category}).exec((err, category) =>{

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: category._id
    });    
    product.save(err => {
        if(err){
            console.error(err);
            return false;
        }
        return true;
    
    });
})};

exports.update = (req,res) => {
    Product.updateOne(
        {_id:req.body.id},
        {
            name:req.body.name,
            description:req.body.description,
            price: req.body.price
        })
        .exec();
};

exports.delete = (req,res) => {
    Product.deleteOne({_id:req.body.id}).exec();
};