import React from 'react';

export default function Photo(props) {
    const {photoData} = props

    return (
        <div className = 'photo-div'>
            <img src={photoData} /> 
        </div>
    )
}