import styled from "styled-components";

export const PartnersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 20px;
  padding: 0 45px;
  h2 {
    font-weight: 600;
  }
  > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 60px;
      height: 45px;
    }
  }
  .ant-row {
    .ant-col {
      width: 16.5%;
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 1400px) {
    gap: 40px;
    h2 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 482px) {
    .ant-row .ant-col {
      padding: 0 5px;
    }
  }
`;
