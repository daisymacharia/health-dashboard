import React from 'react'
import styled from 'styled-components'
import { IoMdPulse as Pulse } from 'react-icons/io'
import { MdFavorite as Heart } from 'react-icons/md'
import { FaThermometerHalf as Thermometer } from 'react-icons/fa'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    height: 100%;
    justify-content: space-between;
`

const Section1 = styled.div`
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: 700;

    p {
        font-size: 1rem;
        font-weight: 400;
    }
`

const Section2 = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Metrics() {
    return (
        <StyledWrapper>
            <Section1>
                You're doing great!
                <p> Main life metrics are normal </p>
            </Section1>
            <Section2>
                <MetricValue Icon={Heart} value='115/68' label='BLOOD PRESSURE' />
                <MetricValue Icon={Pulse} value='115/68' label='PULSE' />
                <MetricValue Icon={Thermometer} value='115/68' label='TEMPERATURE' />
            </Section2>

        </StyledWrapper>
    )
}

const VitalReading = styled.div` 
    display: flex;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: .75rem;
`
const IconWrapper = styled.div` 
    width: 3rem;
    height: 3rem;
    display: flex;
    padding: .5rem;
    font-size: 1.4rem;
    border-radius: 25%;
    background: #28a266;
    align-items: center;
    margin-right: .75rem;
    justify-content: center;
`
const ContentWrapper = styled.div` 
    .value {
        font-size: 1.2rem;
        margin-bottom: .25rem;
    }
    .label {
        font-size: .7rem;
        font-weight: 500;
    }
`
const MetricValue = ({ Icon, value, label }) => <VitalReading>
    <IconWrapper>
        <Icon />
    </IconWrapper>

    <ContentWrapper>
        <div className="value">{value}</div>
        <div className="label">{label}</div>
    </ContentWrapper>

</VitalReading>
