import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div` 
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`
const StyledSVG = styled.svg` 

    circle {
        fill: transparent;
        stroke-width: 10;
        stroke: #000;
        transform: translate(0.313rem, 0.313rem);
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        stroke-dasharray: 370;
        stroke-dashoffset: 370;
        stroke-linecap: round;

        &:nth-child(1) {
            stroke-dashoffset: 0;
            stroke: #ffffff;
            stroke-opacity: 0.2;
        }

        &:nth-child(2) {
            stroke-dashoffset: ${props => props.dashOffset};
            stroke: #ffffff;
        }

    }
`
const StyledText = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    h2 {
        font-weight: 900;
        font-size: 1.25rem;
    }
    span {
        opacity: .8;
        font-size: .9rem;
        font-weight: 500;
        letter-spacing: .01rem;
    }
`

const ProgressBar = ({ percentage = 65 }) => {

    let radius = 80
    let dashArray = 370;
    const calcDashOffset = () => {
        return dashArray - (dashArray * percentage) / 100
    }
    return (
        <StyledDiv>
            <StyledSVG dashArray={dashArray} height={radius * 2} width={radius * 2} dashOffset={() => calcDashOffset()}>
                <circle cx={radius} cy={radius} r={radius - 10 * 2} />
                <circle cx={radius} cy={radius} r={radius - 10 * 2} opacity=".8" />
            </StyledSVG>
            <StyledText>
                <h2> {percentage}%</h2>
                <span>today</span>
            </StyledText>
        </StyledDiv>
    )
}

export default ProgressBar