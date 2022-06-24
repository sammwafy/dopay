import styled from "styled-components";

export const RechargeWrapper = styled.div`
  margin: 50px auto;
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
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 20px auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3.ant-typography {
      color: #4c4c4c;
    }
  }
`;
