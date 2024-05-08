const express=require('express');
const { findrequestforpatient, fulfillrequest } = require('../controller/requestController');
const router=express.Router();
router.get("/find/:patientid",findrequestforpatient);
router.post("/fulfill/:patientid",fulfillrequest);
module.exports=router;