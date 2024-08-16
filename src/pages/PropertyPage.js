import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyForm from '../components/PropertyForm';
import axios from 'axios';

function PropertyPage() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/properties/${id}`)
            .then(response => setProperty(response.data))
            .catch(error => console.error("There was an error fetching the property!", error));
    }, [id]);

    const handleSave = (updatedProperty) => {
        setProperty(updatedProperty);
    };

    return ( <
        div >
        <
        h1 > Property Details < /h1> {
            property ? ( <
                div >
                <
                h2 > { property.title } < /h2> <
                p > { property.description } < /p> <
                PropertyForm property = { property }
                onSave = { handleSave }
                /> <
                /div>
            ) : ( <
                p > Loading... < /p>
            )
        } <
        /div>
    );
}

export default PropertyPage;