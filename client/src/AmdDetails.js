import React, { useState } from 'react';
import Axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import ViewAmbulance from './ViewAmbulance'
const AmdDetails = () => {
  const [ambid,Setambid]=useState('');
  const [ambName,SetambName]=useState('');
  const [ambMail,SetambMail]=useState('');
  const [ambadd,Setambadd]=useState('');
  const [ambxc,Setambxc]=useState(0);
  const [ambyc,Setambyc]=useState(0);
  const handleSubmit= async ()=>{
      const dataval={
          ambulanceid : ambid,
          displayName : ambName,
          email : ambMail,
          location: {
              type : "Point",
              address : ambadd,
              coordinates : [ambxc,ambyc]
          }
      }
      const res=await Axios.post('http://localhost:5000/api/ambulance',dataval);
      if(res){
          toast('good')
      }
      else{
        console.log('gadbad hai');
      }
  }
  return (
    <>
      <form  method="post" className="w-full max-w-sm">

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Ambulance Id:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={ambid} onChange={e=>Setambid(e.target.value)}/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Ambulance Name:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={ambName} onChange={e=>SetambName(e.target.value)}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        AmbulanceMail:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type='text' value={ambMail} onChange={e=>SetambMail(e.target.value)}/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Ambulance Address:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={ambadd} onChange={e=>Setambadd(e.target.value)}/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Ambulance x Coordinate:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type='number' value={ambxc} onChange={e=>Setambxc(e.target.value)}/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Ambulance y Coordinate:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" value={ambyc} onChange={e=>Setambyc(e.target.value)}/>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
        Add Ambulance Details
      </button>
    </div>
  </div>
</form>

    </>
  )
}

export default AmdDetails
