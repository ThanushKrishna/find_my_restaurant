const express = require("express");
const rRouter = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

rRouter.post("/add", restaurantController.addRestaurant);

// GET /api/restaurant/
// This API returns details of all the restaurants present in the database.
rRouter.get("/", restaurantController.fetchAllRestaurants)

// GET /api/restaurant/categories
// This API returns the list of all the categories of restaurants present.
rRouter.get("/categories", restaurantController.fetchAllCategories)

// GET /api/restaurant/categories/categoryName
// This API returns details of all the restaurants of a particular category in the database.
rRouter.get("/categories/:categoryName", restaurantController.fetchByCategory)

// GET /api/restaurant/id
// This API returns details of the restaurant with a particular id.
rRouter.get("/:id", restaurantController.fetchById)

// GET /api/restaurant/rating/ratingValue
// This API returns details of all the restaurants with ratings greater than equal to the given rating.
rRouter.get("/rating/:ratingValue", restaurantController.fetchByRating)

// PUT /api/restaurant/id
// This API updates existing details of the restaurant with a particular id.
rRouter.put("/:id", restaurantController.updateById)

// DELETE /api/restaurant/id 
// This API deletes existing details of the restaurant with a particular id. After successful deletion, the following response should be returned with status code 200.
rRouter.delete("/:id", restaurantController.deleteById)

// DELETE  /api/restaurant/
// This API deletes all existing details of the restaurants
rRouter.delete("", restaurantController.deleteAll)

module.exports = rRouter