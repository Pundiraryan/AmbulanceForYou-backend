const ambulanceModel = require("../model/ambulance");

const createAmbulance=async (req,res) => {
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
    const saveres=await ambulance.save();
    if(saveres){
        console.log("saved sucessfully")
        res.status(200).json(saveres);
    }else{
        console.log('save failed');
    }
}

const findAmbulance = async (req,res) => {
    const {ambulanceid} = req.params;
    const curr=String(ambulanceid);
    const query=curr[curr.length-2]+curr[curr.length-1];
    try {
        const result=await ambulanceModel.findOne({
            ambulanceid:query
        });
        if(result){
            return res.json(result);
        }else{
            console.log('amb not found');
        }
    } catch (error) {
        console.log(error);
    }
}

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

module.exports={findAmbulance,createAmbulance,nearestAmbulance}