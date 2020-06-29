import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
          width: 400px;
          height: 130px;
          border: solid 1px #e3e3ea;
          z-index: 1;
          justify-self: end;
          align-self: end;
          border-radius: 20px;
          padding: 10px 15px;
          
          >div {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 15px;

            h1 {
              margin: 0;
              font-size: 18px;
              letter-spacing: 0.5px;
            }

            .triangle {
              width: 0;
              border-left: 20px solid transparent;
              border-right: 10px solid transparent;
              border-top: 25px solid #3cba78;
              transform: rotate(120deg);
              float: right;
            }
          }

          .profiles {
            width: max-content;
            
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-color: #d4e0ed;
              /* z-index: 2; */
              object-fit: cover;  
              align-self: end;
              justify-self: center;
              margin-right: -10px;
              border: solid 2px #ffffff;
            }
          }
          span {
            font-size: 11px;
            width: 90px;
          }

          .square {
            width: 30px;
            height: 30px;
            background-color: #20324d;
            margin-right: 30px;
          }

          &:before{
            content: "";
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f2be42;
            margin-right: 50px;
            margin-top: -25px;
            float: right;
          }
`
export default function CheckUp() {
    return (
        <Wrapper>
            <div>
                <h1>
                    Next Checkup
                </h1>
                <div class="triangle"></div>
            </div>
            <div>
                <div class="profiles">
                    <img
                        class="av"
                        src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg"
                    />
                    <img
                        class="av"
                        src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg"
                    />
                    <img
                        class="av"
                        src="https://res.cloudinary.com/daisymacharia/image/upload/v1585563565/_MG_1863.jpg"
                    />
                </div>
                <span> You need to visit 3 doctors next month</span>
                <div class="square"></div>
            </div>
        </Wrapper>
    )
}

