import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  background: #fff0c1;
  padding: 0 50px;
  > .ant-col {
    width: 33%;
    justify-content: space-evenly;
  }

  .footerLeft {
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: space-around;
    img {
      max-width: 100px;
    }
    p {
      max-width: 250px;
    }
  }
  .footerLinks {
    display: flex;
    gap: 35px;
    justify-content: space-around;
    .ant-row {
      align-content: flex-start;
    }
    ul {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-left: 0;
      li {
        list-style-type: none;
      }
    }
  }

  .rightFooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .socialLinks {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      max-width: 250px;
      li {
        list-style-type: none;
      }
    }
    .themeSwitch {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      hr {
        width: 100px;
        background: #4caf50;
      }
    }
  }

  @media screen and (max-width: 482px) {
    flex-wrap: wrap;
    align-items: flex-start;
    padding-top: 45px;
    > .ant-col {
      width: 50%;
    }
    .footerLinks {
      flex-direction: column;
      padding-left: 25px;
      ul {
        gap: 0;
        padding: 0;
      }
    }
    .rightFooter {
      margin-top: -100px;
      align-items: flex-start;
      .socialLinks{
        padding: 0;
      }
    }
  }
`;
