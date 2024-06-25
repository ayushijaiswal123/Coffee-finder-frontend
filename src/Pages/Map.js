import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
  
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );

const Map = ({address,coords}) => {
    const location = coords.latitude && coords.longitude
    ? {
        address: address,
        lat: coords.latitude,
        lng: coords.longitude
      }
    : {
        address: address,
        lat: 37.42216, // Default latitude if coords doesn't have latitude
        lng: -122.08427 // Default longitude if coords doesn't have longitude
      };
    
    return (
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD4QuerUIEJEgM30Im8rIE9JcyYNK1qoJ4" }}
            defaultCenter={location}
            defaultZoom={15}>
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={address}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  };

  export default Map;