import React from 'react'
import styled from 'styled-components'
import { CheckUp } from './';
import { Button, Card } from '../components';

const MainSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;

`

const Section1 = styled.div` 
    display: flex;
    justify-content: space-between;
`

const Section2 = styled.div` 
    display: grid;
    grid-template-rows: repeat(2,min-content);
    grid-template-columns: repeat(2,.8fr) repeat(2,1fr);
    grid-gap: 10px;
`

const Section3 = styled.div` 
`
const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
    grid-template-rows: 150px 300px 200px;
    width: 100%;
    height: 100%;
    max-width: 80%;

    * { z-index: 2; }

    &:before {
        content: '';
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background-color: #f2be42;
        position: absolute;
        top: 75px;
        z-index: 1;
        left: 155px;
    }
`
const UserData = styled.div`
    display: grid;
    grid-gap: 20px;
    align-items: center;
    grid-template-columns: auto auto;
`

const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    padding: 20px;
    border-radius: 50%;
    position: relative;
    background-image: url(avatar_ring.svg);
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: #d4e0ed;
    border-radius: 50%;
`

const Points = styled.div` 
    display: flex;

    h1 {
    margin: 0;
    font-size: 5rem;
    }
    div {
        padding-top: 20px;
    }
`
export default function Sidebar() {
    return (
        <MainSection>
            <StyledContainer>
                <Section1>
                    <UserData>
                        <ImageContainer>
                            <Image src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg" />
                            <Button />
                        </ImageContainer>

                        <Points>
                            <h1>81</h1>
                            <div>fit <br />points</div>
                        </Points>
                    </UserData>
                    <CheckUp />
                </Section1>
                <Section2>
                    <Card />
                    <Card gridRow='1/2' backgroundColor='#ffffff' height='140px' />
                    <Card gridRow='2/-1' backgroundColor='#ffffff' height='140px' />
                    <Card gridRow='1/-1' backgroundColor='#20324d' />
                    <Card gridRow='1/-1' backgroundColor='#3cba78' />
                </Section2>
            </StyledContainer>
        </MainSection>

    )
}

