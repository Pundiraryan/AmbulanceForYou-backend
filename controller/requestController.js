const Request = require("../model/request")

const findrequestforpatient=async(req,res)=>{
    try {
        const pid=req.params.patientid;
        const findpr=await Request.find({patientId:pid});
        if(!findpr){
            res.status(400).json({
                found:false,
                request:undefined
            })
        }else{
            res.status(200).json({
                found:true,
                request:findpr
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const fulfillrequest=async (req,res)=>{
    try {
        const pid=req.params.patientid;
        const ack=await Request.findOneAndDelete({
            patientId:pid
        });
        if(ack){
            console.log(ack);
            console.log('item removed');
            res.status(200).send({
              success:true,
              message:'removed'
            })
          }else{
            console.log('failed');
            res.status(400).send({
              success:false,
              message:'removed'
            })
          }

    } catch (error) {
        console.log(error);
    }
}
module.exports={findrequestforpatient,fulfillrequest}