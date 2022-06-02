import styled from "styled-components";

export const Er404 = styled.div`
  .er-container {
    display: flex;
    width: 800px;
    margin: 0 auto;
    align-items: center;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    .err-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 258px;
      height: 300px;
      margin: 0 auto;
      .img {
      }
    }
    .vl {
      border-left: 2px solid rgba(0, 0, 0, 0.12);
      height: 185.5px;
      margin-right: 58px;
      margin-left: 30px;
      /* margin-top: 80px;
      margin-bottom: 100px; */
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
    .e404 {
      margin-top: 50px;
      @media screen and (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 112px;
        line-height: 112px;
        color: #2e7d32;
        margin-bottom: -8px;
      }
      h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 44px;
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 10px;
      }
      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.54);
      }
      .backButton {
        background-color: rgba(76, 175, 80, 1);
        border: none;
        border-radius: 5px;
        height: 40px;
        width: 200px;
        div {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: #ffffff;
          text-transform: uppercase;
        }
      }
    }
  }
`;
