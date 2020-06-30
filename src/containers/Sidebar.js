import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
    height: 100vh;
`

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    border-right: solid 0.06rem #d9d9dd;
    padding: 1.875rem;
    background-color: #f3f2f7;

`
export default function Sidebar() {
    return (
        <StyledSidebar>
            <Wrapper></Wrapper>
        </StyledSidebar>
    )
}

