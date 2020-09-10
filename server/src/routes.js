const express = require('express');
const PointsController = require('./controllers/PointsController');

const routes = new express.Router();
const pointsController = new PointsController();

routes.get('/pontos-coleta', pointsController.show);
routes.post('/pontos-coleta', pointsController.create);
routes.put('/pontos-coleta', pointsController.edit);

module.exports = routes;
