import React, { useContext } from 'react';
import MyContext from '../context/Context';

const CartItem = ( props ) =>
{
    const { cart, setCart } = useContext( MyContext );
    const removeItem = ( id ) =>
    {
        setCart( cart.filter( item => item.id !== id ) );
    };

    return (
        <div className="cartItem">
            <div style={ { backgroundImage: `url(${ props.image })` } }> </div>
            <h1> { props.name } </h1>
            <h2 style={ { color: "red", fontFamily: "cursive" } }><i>{ props.caption }</i> </h2>
            <p> €{ props.price } </p>
            <select value={ props.quantity } onChange={ ( e ) =>
            {
                const item = cart.find( element => element.id === props.id );
                item.quantity = e.target.value;
                console.log( e );
                console.log( item );
                setCart( [ ...cart ] );
            } }>

                {Array(props.stock).fill(null).map((item,index)=><option>{index+1}</option>)}
            </select>

            <div>
                <button onClick={ () => removeItem( props.id ) }>Delete</button>
            </div>
        </div>
    );
};

export default CartItem;