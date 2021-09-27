import React from 'react';
import './Person.css'

const Person = (props) => {

    const {name, designation, id, salary, img} = props.person;

    return (
        <div className="single-person-item">
            <div className="profile-image">
            <img src={img} alt="" />
            </div>
            <h2>Name: {name} </h2>
            <h4>Designation: {designation} </h4>
            <h4>Id: {id} </h4>
            <h4>Salary {salary}</h4>
            <button onClick={() => props.handleAddToCart(props.person)}
                className="bnt-regular"> <i class="fa fa-address-book" aria-hidden="true"></i> Add to cart</button>
        </div>
    );
};

export default Person;