import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.div`
    height: ${props => props.height ? props.height : '3rem'};
    width: ${props => props.width ? props.width : '3rem'};
    border-radius: 20%;

    @media all and (min-device-width: 320px) and (max-device-width: 720px) {
        margin-left: 0.5rem;
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 20%;
    }
`

export default function Avatar(props) {
    return (
        <StyledAvatar {...props}>
            <img src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg" alt="avatar" />
        </StyledAvatar>
    )
}

