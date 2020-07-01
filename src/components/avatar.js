import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 20%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20%;
    }
`

export default function Avatar(props) {
    return (
        <StyledAvatar {...props}>
            <img src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg" alt="profile-picture" />
        </StyledAvatar>
    )
}

