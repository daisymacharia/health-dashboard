import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
        display: flex;
        width: 3.125rem;
        height: 3.125rem;
        padding: 0.06rem;
        bottom: 0;
        right: 0;
        cursor: pointer;
        position: absolute;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        transition: all .3s ease-in-out;
        border: 0.5rem solid #f2be42;
        background: linear-gradient(90deg,#498fc0,#4cb39d);

    ::before {
        width: 0.625rem;
        height: 1.25rem;
        display: block;
        content: "";
        background-size: contain;
        background-position: 50%;
        background-repeat: no-repeat;
        background-image:  url(menu_button.svg);
    }
    @media all and (min-device-width: 320px) and (max-device-width: 720px) {
        right: -.15rem;
        bottom: -.15rem;
        width: 1.75rem;
        height: 1.75rem;
        padding: .35rem;
        border: .2rem solid var(--muted);
    }
`

export default function Button() {
    return (
        <StyledButton>
        </StyledButton>
    )
}

