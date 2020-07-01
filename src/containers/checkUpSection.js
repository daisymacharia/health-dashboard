import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
          width: 27rem;
          height: 9.5rem;
          border: solid 0.06rem #e3e3ea;
          z-index: 1;
          justify-self: end;
          align-self: end;
          border-radius: 1.25rem;
          padding: 0.625rem 1rem;

          @media all and (min-device-width: 320px) and (max-device-width: 720px) {
            width: 100%;
            height: 9.5rem;
            padding: 1rem .75rem;
            background: white;
          }
          
          > div {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 1rem;

            @media all and (min-device-width: 320px) and (max-device-width: 720px) {
              justify-content: flex-start;
              align-items: center;
            }

            h1 {
              margin: 0;
              font-size: 1.125rem;
              letter-spacing: 0.0.313rem;
            }

            .triangle {
              width: 0;
              border-left: 1.25rem solid transparent;
              border-right: 0.625rem solid transparent;
              border-top: 1.5rem solid #3cba78;
              transform: rotate(120deg);
              float: right;

              @media all and (min-device-width: 320px) and (max-device-width: 720px) {
                display: none;
              }
            }
          }

          .profiles {
            width: max-content;

            @media all and (min-device-width: 320px) and (max-device-width: 720px) {
              margin-right: 2rem;
            }
            
            img {
              width: 3.125rem;
              height: 3.125rem;
              border-radius: 50%;
              background-color: #d4e0ed;
              object-fit: cover;  
              align-self: end;
              justify-self: center;
              margin-right: -0.625rem;
              border: solid 0.125rem #ffffff;
            }
          }
          span {
            font-size: 1rem;
            line-height: 1.5;

            @media all and (min-device-width: 320px) and (max-device-width: 720px) {
              width: max-content;
            }
          }

          .square {
            width: 1.875rem;
            height: 1.875rem;
            background-color: #20324d;
            margin-right: 1.875rem;

            @media all and (min-device-width: 320px) and (max-device-width: 720px) {
                display: none;
            }
          }

          &:before{
            content: "";
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: #f2be42;
            margin-right: 3.125rem;
            margin-top: -1.5rem;
            float: right;

            @media all and (min-device-width: 320px) and (max-device-width: 720px) {
                display: none;
            }
          }
`
let profiles = [ 'doc1', 'doc2', 'doc3' ]
export default function CheckUp() {
  return (
    <Wrapper>
      <div>
        <h1>
          Next Checkup
                </h1>
        <div className="triangle"></div>
      </div>
      <div>
        <div className="profiles">
          {profiles.map(profile => <img
            className="av"
            key={profile}
            src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg"
            alt='profile'
          />
          )}
        </div>
        <span> You need to visit <br></br> <strong>3 doctors</strong> next month</span>
        <div className="square"></div>
      </div>
    </Wrapper>
  )
}

