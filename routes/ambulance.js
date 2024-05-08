const express = require("express");
const router = express.Router();
const ambulanceModel = require("../model/ambulance");
const isAuth = require('../user/authentication/isAuth');
const { createAmbulance, nearestAmbulance, findAmbulance, getallambulances } = require("../controller/ambulanceController");

router.post('/',createAmbulance)

//Fetching nearby Ambulancedata depending upon maxDistance specified from user


router.get("/all",getallambulances);
router.get('/info/:ambulanceid', findAmbulance )

module.exports = {
    method : router,
    otherMethod : nearestAmbulance,
}