import styled from "styled-components";

export const Comming = styled.div`
  border: 3px rebeccapurple solid;
  .comming-soon {
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 0 auto;
    align-items: center;
    @media screen and (max-width: 700px) {
      width: auto;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 72px;
      line-height: 88px;
      text-align: center;
      color: rgba(0, 0, 0, 0.87);
      @media screen and (max-width: 700px) {
        font-weight: 500;
        font-size: 52px;
      }
    }
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.54);
    }
  }
`;
