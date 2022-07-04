import React, { useContext } from "react";
import MyContext from "../context/Context";


const MenuItem = props =>
{
  const { cart, setCart,pizzas, setPizzas } = useContext( MyContext );
  return (
    <div className="menuItem">
      <div style={ { backgroundImage: `url(${ props.image })` } }> </div>
      <h1> { props.name } </h1>
      <h2 style={ { color: "red", fontFamily: "cursive" } }><i>{ props.caption }</i> </h2>
      <p> €{ props.price } </p>
      <div>
        <button>Details</button>
        <button disabled={props.stock === 0} onClick={ () =>
        {
          const item = cart.find( element => element.id === props.id );
          if ( item )
          {
            item.quantity+=1;
          } else
          {
            setCart( [ ...cart, { name: props.name, id: props.id, stock:props.stock, quantity: 1, image: props.image, caption: props.caption, price: props.price } ] );
          }
          const myPizza = pizzas.find(pizza=>pizza.id === props.id)
          myPizza.stock -= 1;
          setPizzas([...pizzas])

        } }>{props.stock > 0 ? 'Add to Cart': 'Sold Out'}</button>
      </div>
    </div>
  );
};

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