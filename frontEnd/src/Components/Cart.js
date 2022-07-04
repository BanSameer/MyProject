import React, { useContext } from 'react';
import MyContext from '../context/Context';
import { useHistory } from "react-router-dom";
import CartItem from './CartItem';

const Cart = () =>
{
    const { cart, user } = useContext( MyContext );
    const history = useHistory();
    const placingOrder = () =>
    {
        history.push( '/register' );
    };

    return (
        <div>
            <h1>Cart Items</h1>
            <ul>
                { cart.map( (pizza) =>
                {
                    return (
                        <CartItem
                            key={ pizza.id } id={pizza.id}
                            image={ pizza.image }
                            name={ pizza.name }
                            stock={pizza.stock}
                            quantity={pizza.quantity}
                            caption={ pizza.caption }
                            price={ pizza.price } />
                    );
                } )
                }

            </ul>
            <div>
                <button onClick={ placingOrder }>{ user ? 'Place Order' : 'Login required to Place an Order' }
                </button>
            </div>

        </div>
    );
};

export default Cart;