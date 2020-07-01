import React from 'react'
import styled from 'styled-components'
import { MainBody, Sidebar } from '../containers'

const StyledPage = styled.div`
    display: grid;
    grid-template-columns: 3.75rem 1fr; 
    grid-template-rows: 100vh;

    @media all and (min-device-width: 320px) and (max-device-width: 720px) {
        grid-template-rows: 4rem 1fr; 
        grid-template-columns: 100vw;
    }
`
const DashboardPage = () => {
    return (
        <StyledPage>
            <Sidebar />
            <MainBody />
        </StyledPage>
    )
}

export default DashboardPage;