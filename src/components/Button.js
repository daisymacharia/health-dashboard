import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
        display: flex;
        width: 50px;
        height: 50px;
        padding: 1px;
        bottom: 0;
        right: 0;
        cursor: pointer;
        position: absolute;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-in-out;
        border: 7px solid #f2be42;
        background: linear-gradient(90deg,#498fc0,#4cb39d);

    ::before {
        width: 10px;
        height: 20px;
        display: block;
        content: "";
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image:  url(menu_button.svg);
    }
`

export default function Button() {
    return (
        <StyledButton>
        </StyledButton>
    )
}

