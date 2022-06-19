import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 45px;
  .ant-row {
    align-items: center;
    justify-content: space-between;
    .ant-col {
      display: flex;
      width: 50%;
    }
    .featureImg {
      justify-content: center;
      img {
        width: 350px;
        height: 306px;
      }
    }
    .content {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding-right: 50px;
      img {
        margin-bottom: 10px;
      }
      h2 {
        font-weight: 600;
      }
    }
  }

  .lastFeature {
    display: flex;
    align-items: center;
    .ant-col {
      height: 80%;
      width: 100%;
      flex-direction: column;
      align-items: center;
      > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
    }
    h2 {
      font-weight: 600;
    }

    @media screen and (min-width: 1400px) {
      .ant-col {
        gap: 40px;
        .featureImg {
          img {
            width: 600px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 482px) {
    h2{
      font-size: 1.2rem;
    }
    .ant-row {
      text-align: center;
      height: auto;
      flex-direction: row;
      justify-content: space-around;
      .ant-col{
        width: 100%;
      }
      .featureImg img{
        width: 165px;
        height: auto;
      }
    }
    .ant-row:nth-child(2){
      flex-direction: column-reverse;
    }
    .ant-row .content{
      gap: 0;
      padding-right:0;
      align-items: center;
    }

  }
`;
