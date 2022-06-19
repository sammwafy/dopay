import styled from "styled-components";

export const WorksOnMobileWrapper = styled.div`
  .ant-image {
    display: block;
    margin: 0 auto;
    margin-bottom: -100px;
    width: 500px;
    img {
      width: 500px;
      height: 300px;
    }
  }

  @media screen and (max-width: 482px) {
    .ant-image img {
      width: 290px;
      height: 195px;
    }
  }
`;
