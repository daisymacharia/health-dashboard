import React from 'react'
import styled from 'styled-components';
import { AiFillDingtalkSquare as Square, AiFillUpCircle as Circle, AiTwotoneSliders as Slider } from 'react-icons/ai';
import { FaArrowDown as ArrowDown, FaArrowUp as ArrowUp, FaCheck as Check, FaExclamation as Exclamation } from 'react-icons/fa'
import { CheckUp, Coaching, Metrics } from './';
import { Button, BarChart, Card, MedicalRecord, ProgressBar } from '../components';

const MainSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0;
`

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.875rem;
    grid-template-rows: 13.125rem min-content 12.5rem;
    width: 100%;
    height: 100%;
    max-width: 80%;

    * { z-index: 2; }

    &:before {
        content: '';
        width: 40rem;
        height: 40rem;
        border-radius: 50%;
        background-color: #f2be42;
        position: absolute;
        top: 6.25rem;
        z-index: 1;
        left: 9.7rem;
    }
`

const Section1 = styled.div` 
    display: flex;
    justify-content: space-between;
`

const Section2 = styled.div` 
    display: grid;
    grid-template-rows: repeat(2,min-content);
    grid-template-columns: repeat(2,.7fr) repeat(2,1fr);
    grid-gap: 1.25rem;
`

const Section3 = styled.div` 
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;

    .title {
        margin-bottom: 1.25rem;
    }
`

const SectionWrapper = styled.div` 
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1.25rem;
    height: 100%;
`

const UserData = styled.div`
    display: grid;
    grid-gap: 1.25rem;
    align-items: center;
    grid-template-columns: auto auto;
`

const ImageContainer = styled.div`
    width: 10.125rem;
    height: 10.125rem;
    padding: 1.25rem;
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
        padding-top: 1.25rem;
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
                    <Card>
                        <ProgressBar />
                        <BarChart data={[ 65, 75, 90, 67, 65, 45, 70 ]}
                            label="Water Balance"
                            points='2.5'
                            calibration='litres/day'
                        />
                    </Card>
                    <Card gridRow='1/2' backgroundColor='#ffffff' >
                        <BarChart
                            data={[ 65, 75, 90, 50, 65, 50, 80 ]}
                            label="Activity"
                            bgcolor='#4563eb'
                            color='#2e3d56'
                            lastBar='#5ac8c4'
                            points='3.1'
                            calibration='min/day'
                        />
                    </Card>
                    <Card gridRow='2/-1' backgroundColor='#ffffff' >
                        <BarChart
                            data={[ 65, 75, 85, 50, 65, 90, 95 ]}
                            label="Sleep"
                            bgcolor='#4563eb'
                            color='#2e3d56'
                            lastBar='#5ac8c4'
                            points='7.3'
                            calibration='hours/day'
                        />
                    </Card>
                    <Card backgroundColor='#20324d' height='100%'>
                        <Coaching />
                    </Card>
                    <Card backgroundColor='#3cba78' height='100%'>
                        <Metrics></Metrics>
                    </Card>
                </Section2>
                <Section3>
                    <div className="title"> MEDICAL RECORDS</div>
                    <SectionWrapper>
                        <MedicalRecord Icon={Slider} title='Synevo Laboratory' label='3 pages' date='June 15' recordTitle='Blood Biochemistry'>
                            <div>
                                <div className='top'>
                                    <h2>3</h2>
                                    <ArrowUp color='green' />
                                </div>
                                IMPROVED
                            </div>
                            <div>
                                <div className='top'>
                                    <h2>1</h2>
                                    <ArrowDown color='red' />
                                </div>
                                WORSENED
                            </div>
                        </MedicalRecord>
                        <MedicalRecord Icon={Square} title='Omnio Clinic' label='5 pages' date='May 12' recordTitle='Abdomen X-ray'>
                            <div>
                                <div><Check color='green' /></div>
                                NO PATOLOGY</div>
                        </MedicalRecord>
                        <MedicalRecord Icon={Circle} title='Atkinson Clinic' label='10 pages' date='January 10' recordTitle='Physical test'>
                            <div>
                                <div className='top'>
                                    <h2>2</h2>
                                    <Exclamation color='red' />
                                </div>
                                NOTIFICATIONS
                            </div>
                        </MedicalRecord>
                    </SectionWrapper>
                </Section3>
            </StyledContainer >
        </MainSection >

    )
}

