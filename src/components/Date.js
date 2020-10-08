import React from 'react'

export default function Date(props) {
    const {nasaDateData} = props

    return (
        <div className = "date-div">
            <h3>{nasaDateData}</h3>
        </div>
    )
}