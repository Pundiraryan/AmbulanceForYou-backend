import React from 'react';
import {Link} from 'react-router-dom'

const PlacesCards = ({ places }) => {  
  return (
    <>
    <div className="flex flex-wrap -mx-3">
      {places.map((place) => (
        
        <Link to={`/PoolMemberDetails/${place.name}`} >
      
        <div key={place.id} className="w-128 mx-4 px-3 py-4  ">
          <div className="bg-white rounded-lg shadow-md">
                        <img  alt="HAPPY JOURNEY" src="https://tse4.mm.bing.net/th?id=OIP._xiixb0WH-gzh8mCNuMxiAHaEK&pid=Api&P=0" />
            <div className="p-4">
              <h2 className="text-lg font-medium">Ambulance No: {place.AmbulanceNo}</h2>
              <p className="text-gray-600">AmbulanceCapacity: {place.AmbulanceCapacity}</p>
              <p className="text-gray-600">DriverName: {place.DriverName}</p>
              <p className="text-gray-600">DriverContactNo: {place.DriverContactNo}</p>
              <p className="text-gray-600">HospitalName: {place.HospitalName}</p>
              
            </div>
          </div>
          
        </div>
    
        </Link>
      
      ))}
    </div>
    </>
  );
};

export default PlacesCards;
