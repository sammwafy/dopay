import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 10px;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #2e7d32;
    @media screen and (max-width: 700px) {
      font-weight: 400;
      font-size: 30px;
    }
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
    @media screen and (max-width: 700px) {
      font-weight: 400;
      font-size: 15px;
    }
  }
  .formClass {
    margin: 0 auto;
    padding: 10px;
  }
`;
