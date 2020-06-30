import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-row: ${props => props.gridRow ? props.gridRow : '1/-1'};
        height: ${props => props.height ? props.height : 'max-content'};
        width: 100%;
        background-color: ${props => props.backgroundColor ? props.backgroundColor : '#4563eb'};
        border-radius: 1.25rem; 
        padding: 0.625rem 1.5rem 1.25rem;
`

export default function Card(props) {
    return (
        <StyledCard {...props}>
            {props.children}
        </StyledCard>
    )
}

