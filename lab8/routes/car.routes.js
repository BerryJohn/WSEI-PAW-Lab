const controller = require('../controllers/car.controller');

module.exports = (app) =>{
    app.get('/cars', controller.getAll);
    app.post('/cars', controller.add);
    app.put('/cars', controller.update);
    app.delete('/cars/:id', controller.delete);
};