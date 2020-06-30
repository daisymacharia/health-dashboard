import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
        display: flex;
        flex-direction: column;
        color: white;

        div {
            color: #f2be42;
        }
        
`

export default function Coaching() {
    return (
        <StyledWrapper>
            <h2> Coaching goals</h2>
            <span>Walk atleast 15 mins <br></br> in a row</span>
            <div><strong>15</strong> min walk</div>
        </StyledWrapper>
    )
}

