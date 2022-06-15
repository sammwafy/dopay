import styled from "styled-components";

export const SignInWrapper = styled.div`
  .rightContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
  }
  .facebook {
    width: 30%;
    border: none;
    border-radius: 5px;
    opacity: 0.9;
    background-color: #3b5998;
    color: white;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
  }
  .twitter {
    width: 30%;
    border: none;
    border-radius: 5px;
    opacity: 0.9;
    background-color: #55acee;
    color: white;
    text-align: center;
    font-size: 13px;
    line-height: 30px;
  }
  .google {
    width: 30%;
    border: none;
    border-radius: 5px;
    opacity: 0.9;
    background-color: #dd4b39;
    color: white;
    text-align: center;
    font-size: 13px;
    line-height: 30px;
  }
  .facebook:hover,
  .twitter:hover,
  .google:hover {
    opacity: 1;
    cursor: pointer;
  }
  .spanText {
    display: contents;
  }
  .signContainer {
    justify-content: center;
    .ant-col {
      width: 50%;
    }
    > .ant-col {
      width: 40%;
    }
    @media screen and (max-width: 1025px) {
      .spanText {
        font-size: smaller;
      }
    }
    @media screen and (min-width: 482px) and (max-width: 786px) {
      .ant-col {
        width: 40%;
      }
      > .ant-col {
        width: 50%;
      }
      .facebook {
        padding: 7%;
        font-size: 30px;
        width: 25%;
        text-align: center;
        border-radius: 50%;
      }
      .twitter {
        padding: 7%;
        font-size: 30px;
        width: 25%;
        text-align: center;
        border-radius: 50%;
      }
      .google {
        padding: 7%;
        font-size: 30px;
        width: 25%;
        text-align: center;
        border-radius: 50%;
      }
      .facebookText {
        display: none;
      }
      .twitterText {
        display: none;
      }
      .googleText {
        display: none;
      }
      .spanText {
        font-size: smaller;
      }
    }
    @media screen and (max-width: 482px) {
      flex-direction: column-reverse;
      gap: 15px;
      img {
        display: none;
      }
      .ant-col {
        width: 100%;
      }
      .facebook {
        padding: 7%;
        font-size: 30px;
        width: 30%;
        text-align: center;
        border-radius: 50%;
      }
      .twitter {
        padding: 7%;
        font-size: 30px;
        width: 30%;
        text-align: center;
        border-radius: 50%;
      }
      .google {
        padding: 7%;
        font-size: 30px;
        width: 30%;
        text-align: center;
        border-radius: 50%;
      }
      .facebookText {
        display: none;
      }
      .twitterText {
        display: none;
      }
      .googleText {
        display: none;
      }
      .spanText {
        font-size: smaller;
      }
    }
  }
`;
