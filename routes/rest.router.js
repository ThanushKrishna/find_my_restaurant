const express = require('express');
const app = express();
const restaurantController = require('../controllers/restaurant.controller');

app.post("/", restaurantController.addRestaurant);
