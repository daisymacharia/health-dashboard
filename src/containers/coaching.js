import React from 'react'
import styled from 'styled-components'
import { Switch } from '../components'

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3,1fr);
    flex-direction: column;
    color: white;
    height: 100%;
`

const Section1 = styled.div`
    display: flex;
    justify-content: space-between;
`

const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span {
        margin-top: 1rem;
    }
`

const Section3 = styled.div`
    display: flex;
    align-items: center;
    color: #f2be42;
    font-size: 0.8rem;

    strong {
        font-size: 2.5rem;
        margin-right: 0.313rem;
    }
`

export default function Coaching() {
    return (
        <StyledWrapper>
            <Section1>
                <Switch />
            </Section1>
            <Section2>
                <h2> Coaching goals</h2>
                <span>Walk atleast 15 mins <br></br> in a row</span>
            </Section2>
            <Section3>
                <strong>15</strong>
                <span>min <br></br> walk</span>
            </Section3>
        </StyledWrapper>
    )
}

