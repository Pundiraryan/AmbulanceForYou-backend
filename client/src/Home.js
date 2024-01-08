import React from 'react';
import { Link } from 'react-router-dom';
const home = ({automation}) => {
  return (
    <>
     <header>
        <nav className='l'>
                <Link to='/emergency'><button className="btn2">Emergency</button> </Link>
        </nav>
        <nav className='l'>
                <div className="logo">
                    Ambulance For You
                </div>
        </nav>
        <div className="container">
            <div className="left">
            <h1>
            <span>We Provide Efficient And Immediate Ambulance Services</span>
            </h1>
                <h5 className='intro'>Welcome to our premier website, your one-stop solution for superior ambulance management and bookings. Experience seamless control over ambulance reservations, real-time tracking, and swift medical aid, all at your fingertips. Count on us for unrivaled emergency healthcare management, setting the utmost standards for your safety and well-being.</h5>
                {/* <button className='btn1'>Emergency Booking</button> */}
            </div>
            <div className="right">
                <div className="imgauto">

                </div>
            </div>
        </div>
        
    </header>
    </>
  )
}

export default home;
