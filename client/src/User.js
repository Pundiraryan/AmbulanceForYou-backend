import React, { useState, useEffect, useRef } from "react";
import socketIOClient from 'socket.io-client'
import ReactMapGL, { Marker } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";

const socket = socketIOClient("http://localhost:5000");

function User() {
  const [displayName, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [addressPatient, setAddressPatient] = useState("");
  const [viewport, setViewport] = useState({
    width: "75vw",
    height: "75vh",
    latitude: 29.9304758,
    longitude: 78.062618,
    zoom: 10
  });
  const [userLocation, setUserLocation] = useState({});
  const [ambulanceLocation, setAmbulanceLocation] = useState({});
  const mapRef = useRef();
  useEffect(() => {
    // console.log("inside use effect")
    socket.on("request-sent", (data) => {
      const setAmbulanceLocationvalue = {
        latitude: data.ambulanceLocation.latitude,
        longitude: data.ambulanceLocation.longitude
      };
      //show ambulance only when someone is coming for taking you
      setDisplayName(data.displayName);
      setAddress(data.address);
      setAmbulanceLocation(setAmbulanceLocationvalue);
    });
  }, []);

  const rfh = () => {
    const requestDetails = {
      patientId: "1",
      patientName: "Aryan",
      location: {
        addressPatient: addressPatient,
        userLocation: userLocation
      }
    };
    // console.log("emitted")
    socket.emit("request-for-help", requestDetails);
  };

  // not charng 
  const handleViewportChange = (newViewport) => {
    setViewport({ ...viewport, ...newViewport });
  };
 
  // not change 
  const handleGeocoderViewportChange = (newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    });
  };

  const handleOnResult = (event) => {
    //this function is updating the patients address by geocoding of address that is typed in the address bar
    const patientLocation = {
      latitude: event.result.center[1],
      longitude: event.result.center[0]
    };
    setAddressPatient(event.result.place_name);
    setUserLocation(patientLocation);
  };

  return (
    <div>
      <button type="submit" className="btn btn-primary" onClick={rfh}>
        Request For Help
      </button>
      <div className="heading">
        {displayName && address ? (
          <div>
            <h3>{displayName} is coming to take you</h3>
            <h3> It is here - {address}</h3>
          </div>
        ) : (
          <h3></h3>
        )}
      </div>


      {/* map code using map-gl  */}


      <div className="map">
      <div className="sidebar">
      Longitude: {ambulanceLocation.latitude} | Latitude: {ambulanceLocation.longitude}
      </div>
        <ReactMapGL
          {...viewport}
          ref={mapRef}
          onViewportChange={handleViewportChange}
          // zoom={12}
          mapStyle="mapbox://styles/mapbox/navigation-preview-day-v2"
          mapboxApiAccessToken="pk.eyJ1Ijoia2cta2FydGlrIiwiYSI6ImNrOGdicTdwZjAwMGUzZW1wZmxpMDdvajcifQ.7FtdVDqPnZh4pCtTtcNf4g"
        >
          <Geocoder
            mapRef={mapRef}
            onResult={handleOnResult}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken="pk.eyJ1Ijoia2cta2FydGlrIiwiYSI6ImNrOGdicTdwZjAwMGUzZW1wZmxpMDdvajcifQ.7FtdVDqPnZh4pCtTtcNf4g"
          />

          {Object.keys(ambulanceLocation).length !== 0 ? (
            <Marker
              latitude={ambulanceLocation.latitude}
              longitude={ambulanceLocation.longitude}
            >
              <img className="marker" src="ambulancemarker.png" alt="Ambulance Marker" />
            </Marker>
          ) : (
            <Marker
              latitude={viewport.latitude}
              longitude={viewport.longitude}
            >
              <img className="marker" src="logo.png" alt="Marker" />
            </Marker>
          )}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default User;
