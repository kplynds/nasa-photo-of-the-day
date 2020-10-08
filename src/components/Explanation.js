import React from 'react'

export default function Explanation(props) {
    const {explanationData} = props

    return (
        <div className = 'explanation-div'>
            <p>{explanationData}</p>
        </div>
    )
}