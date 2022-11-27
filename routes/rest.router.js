const express = require("express");
const rRouter = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

rRouter.post("/", restaurantController.addRestaurant);

module.exports = rRouter