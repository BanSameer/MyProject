import React, { useContext } from "react";
/* import { MenuList } from "../Components/MenuList";  */
import { Link } from "react-router-dom"
import MenuItem from "../Components/MenuItem";
import "../App.css";
import "../mediaQuary/MenuMedia.css"
import MyContext from "../context/Context";

const Menu=()=> {
const{pizzas}=useContext(MyContext)
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {pizzas.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.id} id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              stock={menuItem.stock}
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



