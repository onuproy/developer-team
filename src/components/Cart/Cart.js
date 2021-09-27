import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for ( const product of cart) {
        total = total + product.salary;
    }
   

    return (
        <div className="chart_area">
             <h5>Selected : {cart.length}</h5>
             <p>Total Cost:{total}</p>
             {
                 cart.map(newMap => <li>{newMap.name}</li>)
             }
        </div>
    );
};

export default Cart;