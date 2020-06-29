import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
    height: 100vh;
`

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    border-right: solid 1px #d9d9dd;
    padding: 30px;
    background-color: #f3f2f7;

`
export default function Sidebar() {
    return (
        <StyledSidebar>
            <Wrapper></Wrapper>
        </StyledSidebar>
    )
}

