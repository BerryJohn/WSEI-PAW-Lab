const Car = require('../models/car.model');

let cars = [];

exports.getAll = (req,res) => {
    res.status(200).send(cars);
};

exports.add = (req,res) => {
    const newCar = new Car(req.body.id, 
                       req.body.model, 
                       req.body.fuel, 
                       req.body.desc, 
                       req.body.price);
    cars.push(newCar);
    res.status(201).send(newCar)
};

exports.update = (req,res) => {
    const objIndex = cars.findIndex(el => el.id === req.body.id);
    cars[objIndex].model = req.body.model;
    cars[objIndex].fuel = req.body.fuel;
    cars[objIndex].desc = req.body.desc;
    cars[objIndex].price = req.body.price;
    res.status(202).send(cars);
};

exports.delete = (req,res) => {
    const newCars = cars.filter(el => el.id != req.params.id);
    cars = newCars;
    res.status(202).send(cars);
};