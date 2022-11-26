const restaurantModel = require("../models/restaurant.model");

exports.addRestaurant = (req, res) => {
    return res.status(200).json{
        message : " Restaurant added";
    }
}