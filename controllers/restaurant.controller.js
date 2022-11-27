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

exports.fetchAllRestaurants = async(req, res)=>{
    try{
        const allRestaurants = await restaurantModel.find({})

        return res.status(200).json({
            restaurants: allRestaurants,
            message: "Restaurants fetched successfully"
        })
    }
    catch(err){
        res.status(500).send("Some error occurred while creating the Restaurant")
        console.log(err)
    }
}

exports.fetchAllCategories = async(req, res)=>{
    try{
        const result = await restaurantModel.find({},{_id:0, category:1})

        const responseObject = []
        result.forEach(doc=>responseObject.push(doc.category))

        return res.status(200).send(responseObject)
    }
    catch(err){
        res.status(500).send("Some error occurred while creating the Restaurant")
        console.log(err)
    }
}

exports.fetchByCategory =  async(req, res)=>{
    try{
        //console.log(req.params)

        const result = await restaurantModel.find({category:req.params.categoryName})
        
        // console.log(result)

        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send("Some error occurred while creating the Restaurant")
        console.log(err)
    }
}

exports.fetchById = async(req, res)=>{

       try{
        //console.log(req.params)

        const result = await restaurantModel.find({_id:req.params.id})
        
        console.log(result)
        if(result.length===0){
            return res.status(404).json(
                {
                    message:"No Restaurant found with the given ID"
                }
            )
        }

        return res.status(200).send(result)
    }
    catch(err){
        res.status(500).send("Some error occurred while creating the Restaurant")
        console.log(err)
    }
}

exports.fetchByRating = async(req, res)=>{

    try{
     //console.log(req.params)

     const result = await restaurantModel.find({rating:{$gte:req.params.ratingValue}})
     
    // console.log(result)

     return res.status(200).send(result)
 }
 catch(err){
     res.status(500).send("Some error occurred while creating the Restaurant")
     console.log(err)
 }
}

exports.updateById = async(req, res)=>{

    try{
     //console.log(req.params)
     if(Object.keys(req.body).length===0){
        return res.status(400).json({
            message: "Restaurant Data is Required"
        })
    }
    const result = await restaurantModel.updateOne({_id:req.params.id},{$set:req.body})
     
    // console.log(result)

    return res.status(200).json({
        message:"restaurant updated successfully"
     })
 }
 catch(err){
     res.status(500).send("Some error occurred while creating the Restaurant")
     console.log(err)
 }
}

exports.deleteById = async(req, res)=>{

    try{
    
    const result = await restaurantModel.findOneAndDelete({_id:req.params.id})
     
    // console.log(result)

    return res.status(200).json({
        restaurant: result,
        message:"Restaurant deleted successfully"
     })
 }
 catch(err){
     res.status(500).send("Some error occurred while creating the Restaurant")
     console.log(err)
 }
}

exports.deleteAll = async(req, res)=>{

    try{
    
    const result = await restaurantModel.deleteMany({})
     
    // console.log(result)

    return res.status(200).json({
        restaurant: result,
        message: "Restaurants deleted successfully"
     })
 }
 catch(err){
     res.status(500).send("Some error occurred while creating the Restaurant")
     console.log(err)
 }
}