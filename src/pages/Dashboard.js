import React from 'react'
import styled from 'styled-components'
import { MainBody, Sidebar } from '../containers'

const StyledPage = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr; 
    grid-template-rows: 100vh;
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