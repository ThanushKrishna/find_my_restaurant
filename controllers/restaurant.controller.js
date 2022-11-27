const restaurantModel = require("../models/restaurant.model");

exports.addRestaurant = async (req, res) => {
    try{
        if(Object.keys(req.body).length==0){
            return res.status(400).json({
                message: "Content cannot be Empty"
            })
        }

        const restaurtant = {
            name: req.body.name,
            location: req.body.location,
            rating: req.body.rating,
            description: req.body.description,
            imageURL: req.body.imageURL,
            phone: req.body.phone,
            category: req.body.category
        }

        const addObject = await restaurantModel.create(restaurtant);

        const responseObject = {
            name: addObject.name,
            location: addObject.location,
            rating: addObject.rating,
            description: addObject.description,
            imageURL: addObject.imageURL,
            phone: addObject.phone,
            category: addObject.category,
            _id: addObject._id,
            createdAt: addObject.createdAt,
            updatedAt: addObject.updatedAt,
            __v: addObject.__v
        }
   
        return res.status(200).json({
            data: responseObject,
            message: "addess added successfully"
        })
    }
    catch(err){
        res.status(500).send("Error Occured while Creating")
        console.log(err)    
    }
}