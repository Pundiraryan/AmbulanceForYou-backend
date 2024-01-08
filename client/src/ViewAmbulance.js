import React from 'react';
import PlacesCards from './PlacesCard';

const places = [
 {id:1, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '79094584936',HospitalName: 'Delta',type:'basic' },
 {id:2, AmbulanceNo: '12345', AmbulanceCapacity: '5', DriverName: 'Aryan Pundir',DriverContactNo: '9094584936',HospitalName: 'Delta' ,type:'basic'}
 ]

function App({type}) {
  return (
    <div>
      <PlacesCards places={places} type={type}/>
    </div>
  );
}
export default App;
