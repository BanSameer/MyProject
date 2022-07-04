import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../App.css";
import "../mediaQuary/HomeMedia.css"

const Home=()=> {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" style={{textAlign:"left"}}>
        <h1> SAM's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
