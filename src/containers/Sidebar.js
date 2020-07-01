import React from 'react'
import styled from 'styled-components'
import {
    MdDashboard as Dashboard,
    MdPieChart as PieChart,
    MdSettings as Settings,
    MdChatBubble as ChatBubble
} from 'react-icons/md';
import { Avatar } from '../components';

const StyledSidebar = styled.div`
    height: 100vh;
`

const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    border-right: solid 0.06rem #d9d9dd;
    padding: 1.8rem 1rem;
    background-color: #f3f2f7;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Logo = styled.div` 
    background-image: url(logo.svg);
    width: 2rem;
    height: 2rem;
`

const SidebarMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const MenuItem = styled.div` 
    color: ${props => props.active ? '#4563eb' : '#8992a2'};
    font-size: 1.5rem;
    cursor: pointer;
    cursor: pointer;
    margin: 1.5rem 0;
    height: 1.55rem;
    font-size: 1.5rem;
    position: relative;
    transition: all .3s ease-in-out;
`

export default function Sidebar() {
    return (
        <StyledSidebar>
            <Wrapper>
                <Logo />

                <SidebarMenu>
                    <MenuItem active={true}> <Dashboard />   </MenuItem>
                    <MenuItem> <PieChart />   </MenuItem>
                    <MenuItem> <ChatBubble />   </MenuItem>
                    <MenuItem> <Settings />   </MenuItem>
                </SidebarMenu>

                <Avatar width='2rem' height='2rem'></Avatar>

            </Wrapper>
        </StyledSidebar>
    )
}

