import React from "react";

const MenuItem=props=> {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}> </div>
      <h1> {props.name} </h1>
      <h2 style={{color:"red", fontFamily:"cursive"}}><i>{props.caption}</i> </h2>
      <p> €{props.price} </p>
    </div>
  );
}

export default MenuItem;

/* const MenuItem=({image, name, price })=> {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> €{price} </p>
    </div>
  );
} */