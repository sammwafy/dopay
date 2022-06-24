import styled from "styled-components";

export const PayContainer = styled.div`
  display: flex;
  margin: 20px auto;
  width: 80%;
  background: white;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 0;
  .top {
    align-items: center;
    justify-content: center;
    display: flex;
    h3.ant-typography {
      color: #4c4c4c;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .ant-image {
      cursor: pointer;
      margin: 0 25px;
    }
  }
`;

export const PayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
