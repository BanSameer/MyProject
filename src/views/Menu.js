import React from "react";
import { MenuList } from "../Components/MenuList"; 
import { Link } from "react-router-dom"
import MenuItem from "../Components/MenuItem";
import "../App.css";
import "../mediaQuary/MenuMedia.css"

const Menu=()=> {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key} id={key}
              image={menuItem.image}
              name={menuItem.name}
              caption={menuItem.caption}
              price={menuItem.price}/>
          );
        })}
      </div>
     <div> <Link to="/">Go to Home</Link></div>
    </div>
  );
}

export default Menu;



