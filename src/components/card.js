import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-row: ${props => props.gridRow ? props.gridRow : '1/-1'};
        height: ${props => props.height ? props.height : '300px'};
        width: 180px;
        background-color: ${props => props.backgroundColor ? props.backgroundColor : '#4563eb'};
        border-radius: 20px; 
`

export default function Card(props) {
    return (
        <StyledCard {...props}>
        </StyledCard>
    )
}

