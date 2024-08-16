import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/properties/')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the properties!", error);
            });
    }, []);

    return ( <
        div >
        <
        h1 > Properties < /h1> <
        ul > {
            properties.map(property => ( <
                li key = { property.id } > { property.title } - { property.description } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default PropertyList;