import React from "react"
import Date from "./Date"

export default function Title(props) {
    const {titleData, dateData} = props

    return (
        <div classname = 'title-div'>
            <h1>{titleData}</h1>
            <h3><Date nasaDateData={dateData}/></h3>
        </div>
    )
}