import React from 'react'
import styled from 'styled-components'

const StyledMedicalRecord = styled.div`
    display: grid;
    grid-template-columns: 8rem 1fr;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    grid-column-gap: 1.5rem;
`

const MedicalCard = styled.div`
    grid-row: 1/-1;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 15px 43px 0px rgba(212,212,212,0.75);
`

const StyledIcon = styled.div`
    margin: 0.5rem 0.5rem 0;
    font-size: 1.5rem;
`
const Title = styled.div` 
    font-weight: 700;
    padding: 0rem 0.5rem 1rem;
`

const Bottom = styled.div` 
    bottom: 0;
    background: blue;
    padding: 0.3rem;
    color: white;
    text-align: center;
`

const Metadata = styled.div` 
    grid-row: 1/2;

    h2 {
        font-weight: 600;
        margin-top: .25rem;
        font-size: 0.8rem;
    }
`

const RecordTitle = styled.div` 
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.3rem;
`

const Date = styled.div` 
    font-weight: 300;
    font-size: 0.9rem;
`
const ConditionData = styled.div` 
    grid-row: 2/-1;
    display: flex;
    align-items: flex-end;
    

    > div {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;

        .top {
            display: flex;
            align-items: center;
        }
            
            svg {
                background-color: white;
                border-radius: 50%;
                font-size: 1rem;
                padding: 0.2rem;
                fill: ${props => props.color};
                margin-left: 0.5rem;
            }
        &:nth-child(1){
            margin-right: 2rem;
        }
    }

`

export default function MedicalRecord({ Icon, title, label, children, date, recordTitle }) {
    return (
        <StyledMedicalRecord>
            <MedicalCard>
                <StyledIcon> <Icon /></StyledIcon>

                <Title> {title}</Title>
                <Bottom>{label}</Bottom>
            </MedicalCard>
            <Metadata>
                <RecordTitle> {recordTitle}</RecordTitle>
                <Date> {date} </Date>
            </Metadata>
            <ConditionData>
                {children}
            </ConditionData>

        </StyledMedicalRecord>
    )
}

