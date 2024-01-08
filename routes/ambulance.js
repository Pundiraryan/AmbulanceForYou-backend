const express = require("express");
const router = express.Router();
const ambulanceModel = require("../model/ambulance");
const isAuth = require('../user/authentication/isAuth')

router.post('/',(req,res) => {
    const {ambulanceid,displayName,phone,email,location} = req.body;
    const ambulance = new ambulanceModel({
        ambulanceid,
        displayName,
        phone,
        email,
        location
    })
    console.log(req.body.location)

    //Saving Ambulance Data
    ambulance.save((err,result) => {
         if(err) {
            console.log("error has occured");
            res.status(404).json(err);
        }
        else {
            console.log("saved sucessfully")
            res.status(200).json(result);
        }
    })
})

//Fetching nearby Ambulancedata depending upon maxDistance specified from user
const nearestAmbulance = async (longitude,latitude) => {
    // console.log('i am here\n');
    // console.log(maxDistance);
    try {
        const newamb = await ambulanceModel.find({
            location : {
              $near : {
                    $geometry : {
                        type : "Point",
                        coordinates : [longitude,latitude]
                    }, 
                    $maxDistance : 5000       
                }
            }
        }).exec();
        console.log(newamb.length);
        return newamb;
    } catch (error) {
        console.log(error);
    }
}


router.get('/info/:ambulanceid',  (req,res) => {
    const {ambulanceid} = req.params;
    // console.log(ambulanceid,"id from server");
    ambulanceModel.findOne({
        ambulanceid
    }).then((result) => {
        // console.log(`ambulance found with ${result.displayName}`);
        // console.log(result.displayName);
        return res.json(result);
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = {
    method : router,
    otherMethod : nearestAmbulance,
}