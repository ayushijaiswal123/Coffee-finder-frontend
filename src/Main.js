import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./recipe.css";

const ProgressBar = ({ value, total }) => {
  const pct = (value / total) * 100;
  return (
    <div className="progressBarContainer">
      <div
        className="progressBar"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

const Main = () => {
  const [cafes, setCafes] = useState([]);
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("Bengaluru");
  const navigate = useNavigate();

  useEffect(() => {
    getCafes();
  }, [query]);
  
  const getCafes = async() => {
    const response = await fetch(`https://coffee-finder-backend.vercel.app/cafes/${query}`);
    const data = await response.json();
     setCafes(data);
  };

  const updateSearch = (e) => {
    setCity(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(city);
    setCity("");
  };

  const openPost = (id,location) => { 
    console.log(location);
    navigate(`/details/${location}/${id}`); 
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
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" style={{fontSize:40}} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      
      <section className="cardListContainer">
        <h1 style={{ textAlign: 'center', fontSize: 24, marginTop: 30,color:"white" }}>
          CoffeeFinder - Your friendly neighbourhood cafes finder
        </h1>

        <ul className="cardList">
          {cafes.map((cafe, index) => {
            return (
              <li className="card" key={index}>
                <div
                  className="cardImage"
                  style={{ background: `url(${cafe.thumbnail}) center / cover` }}
                />
                <div className="cardBody">
                  <div>{cafe.title}</div>
                  <div>&nbsp;</div>
                  <p className="cardDescription">{cafe.description}</p>
                  <footer>
                    Rated {cafe.rating} out of 5
                  </footer>
                  <div className="progressBarContainer">
                    <ProgressBar value={cafe.rating} total="5" />
                  </div>
                                   
                    <button className="cardButton" onClick={() => openPost(cafe.position,query)}>Know More</button>
                  
                    
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Main;
