import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Developer.css'

const Developer = () => {

    const [developes, setDevelopers] = useState([]);

    useEffect(() => {
        fetch('./person.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, [])

    return (
        <div className="developer-area">
            <div className="profile-item">
               {
                  developes.map(person => <Person 
                     key={person.key}
                     person={person}
                  ></Person>)
               }
            </div>
            <div className="cart-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at voluptatem deserunt recusandae eveniet? Odit accusamus doloribus ut eius ullam maiores consequatur nesciunt, minus assumenda quaerat accusantium enim, aliquam numquam?</p>
            </div>
        </div>
    );
};

export default Developer;