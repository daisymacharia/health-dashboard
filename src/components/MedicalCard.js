import React from 'react'
import styled from 'styled-components'

const StyledMedicalRecord = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: ${props => props.height ? props.height : '13.125rem'};
        width: 100%;
        background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
        border-radius: 0.625rem; 
`

export default function MedicalRecord(props) {
    return (
        <StyledMedicalRecord {...props}>
        </StyledMedicalRecord>
    )
}

