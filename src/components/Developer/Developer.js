import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Developer.css'

const Developer = () => {

    const [developes, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./person.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, [])

    const handleAddToCart = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    return (
        <div className="developer-area">
            <div className="profile-item">
               {
                  developes.map(person => <Person 
                     key={person.key}
                     person={person}
                     handleAddToCart={handleAddToCart}
                  ></Person>)
               }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Developer;