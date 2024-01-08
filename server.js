const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const requestModel = require("././model/request");
const myMethods = require("./routes/ambulance");
const method = myMethods.method;
const otherMethod = myMethods.otherMethod;
const dotenv = require("dotenv");
const signupRoutes = require('./user/routes/singup_route');
const loginRoutes = require('./user/routes/login_route')

dotenv.config({
    path : ".env"
})

app.use(bodyParser.json());

app.use((error, _, res, next) => {
    if(error){
        console.log(error)
        const message = error.message;
        const status = error.status_code;

        res.status(status).json({
            message : message
        })
    }
    next()
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true,
dbName:"ambulanceProject"})
.then(() => console.log('Database connected'))  
.catch((err) => {
    console.log(err);
})

app.use(cors());

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, () => {
    console.log(`Server started on  http://localhost:${PORT}`);
});

//Initializing the server instance of websocket
var io =require("socket.io")(server);

//Connecting Users
io.on('connection', (socket) => {
    console.log("A user just connected");

    //Ambulance users joinning seperate rooms
    socket.on('join' ,(data) => {  
    socket.join(data.displayName);
    console.log(`User joined room ${data.displayName}`)
})
    

//Listening for help event from patient
//@User Component

socket.on("request-for-help",(data) => {
    // console.log(`this is data - ${data.patientName}`)
    // console.log("HRE IN SERVER.JS")
    const requestTime = new Date();
    console.log(data);
    const requestId = mongoose.Types.ObjectId();
    const location = {
        addressPatient : data.addressPatient,
        coordinates : [
            data.location.userLocation.longitude,
            data.location.userLocation.latitude
        ]
    }
    // console.log("---");
    const patientId = data.patientId;
    // console.log(patientId)
    const status = "waiting";

    const request = new requestModel({
        requestId,
        requestTime,
        location,
        patientId,
        status
    })

    //Saving request to the database
    request.save().then((request) => {
        console.log("ok");
    }).catch((err) => {
        console.log("error in saving")
        console.log(err);
    })

    //Fetching nearest ambulance
    
    console.log(location.coordinates[0]);
    console.log(location.coordinates[1]);
    const nearestAmbulance =  otherMethod(location.coordinates[0],location.coordinates[1]);
    // console.log(nearestAmbulance,"nearest");
    nearestAmbulance.then((result) => {
        for(let i=0;i<result.length;i++)
        {
            //Emitting the event to the nearby ambulances
            //@App component
            console.log(result,"hello");
            io.to(result[i].displayName).emit("request",data);
            
        }
    }
    ).catch((err) => {
        console.log(err);
    })
    });
    //Listening for the event from ambulance 
    //@App Component
    socket.on("request-accepted", (data) => {
        ambulanceDetails = data;
        // console.log(data)
        //Emitting the event to the patient
        //@User Component
        io.emit("request-sent",ambulanceDetails);
    })
})
//for url encoding
app.use(express.urlencoded({
    extended : false
}));
// console.log("herllo")
//Initializing Routes
app.use('/api/ambulance',method);
//For authenticating users
app.use(signupRoutes);
app.use(loginRoutes)



