import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from 'react-avatar';
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) { 
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="mx-3 w-50vh  my-16 py-2 px-2 ">
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">                            
      <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={user.name} size={50} round="14px"/>
        {/* <img src={user.picture} alt={user.name} /> */}
        <h6>{user.name}</h6>
        {/* <p>{user.email}</p> */}
        </button>
      </div>
    )
  );
};

export default Profile;