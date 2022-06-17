import styled from "styled-components";

export const FeaturesWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
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
  }
`;
