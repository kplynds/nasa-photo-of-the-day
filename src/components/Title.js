import React from 'react'

export default function Title(props) {
    const {titleData} = props

    return (
        <div className = 'title-div'>
            <h1>{titleData}</h1>
        </div>
    )
}