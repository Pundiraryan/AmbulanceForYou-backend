const express = require("express");
const router = express.Router();
const ambulanceModel = require("../model/ambulance");
const isAuth = require('../user/authentication/isAuth');
const { createAmbulance, findAmbulance, nearestAmbulance } = require("../controller/ambulanceController");

router.post('/',createAmbulance);
router.get('/info/:ambulanceid',findAmbulance);

module.exports = {
    method : router,
    otherMethod : nearestAmbulance,
}