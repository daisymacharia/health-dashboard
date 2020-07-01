import React from 'react'
import styled from 'styled-components'
import { Avatar } from './'

const StyledSwitch = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;

        .switch {
            display: block;
            cursor: pointer;
            position: relative;
            border-radius: 2rem;
            background: #16243b;
            outline: none;
            color: #707070;
            width: 4rem;
            height: 1.5rem;
            border-radius: 2rem;
            transition: all 0.3s;
            text-align: right;
            font-size: 0.6rem;
            padding: 0.5rem 0.3rem;
        }

	.switch:after {
		content: "";
		position: absolute;
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 1.8rem;
		background-color: white;
		top: -0.2rem;
        left: 0rem;
        color: black;
        transition: all 0.3s;
        
	}

	input[type="checkbox"]:checked + .switch:after {
		left: 100%;
        transform: translateX(-100%);
	}

	input[type="checkbox"]:checked + .switch {
        background-color: #4563eb;
        color: transparent;
	}

	.remove-from-screen {
		width: 0;
        height: 0;
        visibility: hidden;
	}

`

export default function Switch(props) {
    return (
        <StyledSwitch {...props}>
            <Avatar />
            <input type="checkbox" id="toggle" className="remove-from-screen" />
            <label htmlFor="toggle" className="switch"> DONE</label>
        </StyledSwitch>
    )
}
