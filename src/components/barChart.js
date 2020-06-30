import React from 'react'
import styled from 'styled-components'

const ChartWrapper = styled.div` 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        color: ${props => props.color ? props.color : 'white'};
        font-size: 1rem;
        margin: 0.625rem 0;
        font-weight: 400;
    }
`
const StyledChart = styled.div` 
    display: grid;
    grid:  repeat(99,1fr) / repeat(7, 0.5rem);
    height: 3.125rem;
    width: 100%;
    grid-column-gap: 0.5rem;

    
`;

const GraphBar = styled.div` 
        height: 100%;
        background: ${props => props.bgcolor ? props.bgcolor : 'white'};
        grid-row-start: ${props => 100 - props.height};
        cursor: pointer;
        grid-row-end: 100;
        border-radius: .5rem;
        
        &:last-child {
            background-color: ${props => props.lastBar};
            opacity: 0.5;
        }
`;

const Label = styled.div` 
    color: ${props => props.color ? props.color : 'white'};
    font-size: 0.875rem;

    strong {
        font-size: 1.5rem;
        margin-right: 0.313rem;
    }
`

const BarChart = ({ bgcolor, color, label, data = [], lastBar, points, calibration }) => {
    return (
        <ChartWrapper color={color}>
            <StyledChart>
                {data?.map((dataset, idx) =>
                    <GraphBar key={`${dataset} ${idx}`} height={dataset} bgcolor={bgcolor} lastBar={lastBar} ></GraphBar>
                )}
            </StyledChart>

            <h2> {label}</h2>
            <Label color={color}>
                <strong>{points}</strong> {calibration}
            </Label>
        </ChartWrapper >

    )
}

export default BarChart;