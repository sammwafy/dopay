import styled from "styled-components";

export const CreateAccFormStyle = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
  .formClass {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    color: #4c4c4c;
    margin-bottom: 30px;
    @media screen and (max-width: 700px) {
      font-weight: 200;
      font-size: 10px;
    }
  }
  .radio {
    display: flex;
    flex-direction: column;
  }
  .caf-img {
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .ptn {
    margin: 0 auto;
  }
`;
