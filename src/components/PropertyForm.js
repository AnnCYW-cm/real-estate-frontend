import React, { useState } from 'react';
import axios from 'axios';

function PropertyForm({ property = null, onSave }) {
    const [title, setTitle] = useState(property ? property.title : '');
    const [description, setDescription] = useState(property ? property.description : '');

    const handleSubmit = (event) => {
        event.preventDefault();
        const propertyData = { title, description };

        if (property) {
            // 编辑现有的房产信息
            axios.put(`http://localhost:8000/properties/${property.id}`, propertyData)
                .then(response => {
                    onSave(response.data);
                })
                .catch(error => {
                    console.error("There was an error updating the property!", error);
                });
        } else {
            // 添加新的房产信息
            axios.post('http://localhost:8000/properties/', propertyData)
                .then(response => {
                    onSave(response.data);
                })
                .catch(error => {
                    console.error("There was an error creating the property!", error);
                });
        }
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Title < /label> <
        input type = "text"
        value = { title }
        onChange = { e => setTitle(e.target.value) }
        required /
        >
        <
        /div> <
        div >
        <
        label > Description < /label> <
        textarea value = { description }
        onChange = { e => setDescription(e.target.value) }
        required /
        >
        <
        /div> <
        button type = "submit" > { property ? 'Update' : 'Create' } < /button> <
        /form>
    );
}

export default PropertyForm;