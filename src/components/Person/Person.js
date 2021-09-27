import React from 'react';
import './Person.css'

const Person = (props) => {

    const {name, designation, id, salary, img} = props.person;

    return (
        <div className="single-person-item">
            <img src={img} alt="" />
            <h2>Name:{name} </h2>
            <h3>Designation: {designation} </h3>
            <h4>Id: {id} </h4>
            <h4>Salary {salary}</h4>
        </div>
    );
};

export default Person;