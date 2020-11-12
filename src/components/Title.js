import React from "react"
import Date from "./Date"
import styled from 'styled-components'

const StyledHeader = styled.div`
    color: red;
`

export default function Title(props) {
    const {titleData, dateData} = props

    return (
        <StyledHeader>
            <h1>{titleData}</h1>
            <h3><Date nasaDateData={dateData}/></h3>
       </StyledHeader>
    )
}