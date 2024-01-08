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