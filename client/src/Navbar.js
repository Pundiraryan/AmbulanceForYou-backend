import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Logout from './Logout';
import Auth0Profile from './Auth0Profile';
import {Link} from "react-router-dom";
// import {useHistory} from 'react-router-dom';
// const handleClick = () => history.push('/emergency');
const Navbar = () => {
  const {  isAuthenticated } = useAuth0();
  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-red-900 p-6">
  
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-orange-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto h-[18px]">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4 px-6 font-bold text-lg">
        Home
      </Link>
      
      <Link to="/ambdetails" className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4 px-6 font-bold text-lg">
        Ambulance Details
      </Link>
      <Link to="/addamb" className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4 px-6 font-bold text-lg">
        Add a New Ambulance
      </Link>  
      <Link to="/about" className=" px-4 block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4 px-6 font-bold text-lg">
        About
      </Link>
      <Link to="/contact" className=" px-4 block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4 px-6 font-bold text-lg">
        Contact Us
      </Link>
      <Link to="/login" className=" px-4 block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4 px-6 font-bold text-lg">
        Hospital login
      </Link>
    </div>
    {isAuthenticated &&
      <li>
      <p>
    <Auth0Profile/>
    </p>
    </li>
    }
    <li>
   { isAuthenticated ? (
    <div className="">
   
    <div>
      <Logout/>
      </div>
    </div>
   
    ):(
      <div>
      <Login/>
      
    </div>
    )}
    
    </li>
  </div>
</nav>

    </div>
  )
}

export default Navbar
