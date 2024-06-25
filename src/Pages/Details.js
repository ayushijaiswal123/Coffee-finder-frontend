// src/CafeDetails.js
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import "./mod.css";
import Map from "./Map";

const CafeDetails = () => {
    const { id } = useParams();
    const {location} = useParams();
    const [selectedcafe, setSelectedCafe] = useState({});
    const [options,setOptions] = useState({});

    useEffect(()=>{getCafes();
    },[]);

    const getCafes = async () => {
        const response = await fetch(`https://coffee-finder-backend.vercel.app/cafes/${location}`,{mode: 'cors',method: 'GET'});
        const data = await response.json();
        const cafe = data.find(cafe => cafe.position == id);
        setSelectedCafe(cafe);
        setOptions(cafe.service_options);
      };
    
    
  return (
    <div className="App">
        <nav>
            <div class="nav-wrapper" style={{color:"white",backgroundColor:"#D2B48C"}}>
            <a href="#" class="brand-logo" style={{paddingLeft:"10px"}}>Coffee Finder</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>               
            </ul>
            </div>
        </nav>
        <div className ="container">
            <div class ="image">
                {selectedcafe.address && selectedcafe.gps_coordinates && (
                    <Map address={selectedcafe.address} coords={selectedcafe.gps_coordinates} />
                )}
            </div>
            <div class="text">
                <h1 className="cafetitle">{selectedcafe.title}</h1>
                
                <p className="cafeaddr"><i className="material-icons left">location_on</i>{selectedcafe.address}</p>
                {/* Conditionally render the second <p> tag if selectedcafe.hours is defined */}
                {selectedcafe.hours && (
                                <p className="cafehours" style={{ color: "#FFF5ED" }}>
                                    <i className="material-icons left">access_alarms</i>{selectedcafe.hours}
                                </p>
                            )}        
                <p className="cafereviews" style={{color:"#FFF5ED"}}><i className="material-icons left">rate_review</i>Total Reviews - {selectedcafe.reviews}</p>
                {options && options.takeout &&(
                    <p className="cafehours" style={{ color: "#FFF5ED" }}>
                    <i className="material-icons left">check_circle</i>Takeout
                </p>
            )}
                {options && options.dine_in &&(
                        <p className="cafehours" style={{ color: "#FFF5ED" }}>
                        <i className="material-icons left">local_dining</i>Dine In
                    </p>
                )}
                {options && options.delivery &&(
                        <p className="cafehours" style={{ color: "#FFF5ED" }}>
                        <i className="material-icons left">directions_bike</i>Delivery
                    </p>
                )}
            </div>      
            
        </div>
        
        
    </div>
  );
};

export default CafeDetails;