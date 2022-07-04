import React, {useState } from 'react'
import MyContext from './Context';
import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import samTechSpecial from "../assets/saMtechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

function Container({children}) {

    const [user, setUser]=useState(null);
    const [isLogin, setIsLogIn]=useState(false);
    const [pizzas, setPizzas]=useState([{
        name: `Pepperoni Pizza`,
        id:1,
        stock:3, 
        caption:`So Typical`,
        image: Pepperoni,
        price: 15.99,
      },
      {
        name: `Margherita Pizza`,
        id:2,
        stock:10, 
       caption:`Now This is Pizza`,
        image: Margherita,
        price: 13.99,
      },
      {
        name: `E=Mc2  Special`,
        id:3,
        stock:10, 
        caption:`Price is really special`,
        image: samTechSpecial,
        price: ` 25 / 3 * 5 + 6 - 21.7`,
      },
      {
        name: `Vegan Pizza`,
        id:4,
        stock:10, 
        caption:`Plant's Meat`,
        image: Vegan,
        price: 17.99,
      },
      {
        name: `Pineapple Pizza`,
        id:5,
        stock:10, 
        caption:`Not Even a Pizza`,
        image: Pineapple,
        price: 4.99,
      },
      {
        name: `All You Can Eat`,
        id:6,
        stock:10, 
        caption:`Just Expensive Pizza`,
        image: Expensive,
        price: 59.99,
      }]);
    const [cart, setCart]=useState([]);


  return (
   <MyContext.Provider value={{user, setUser, isLogin, setIsLogIn, pizzas, setPizzas, cart, setCart}}>
    {children}
   </MyContext.Provider>
  )
}

export default Container