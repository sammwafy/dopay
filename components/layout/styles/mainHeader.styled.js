import styled from "styled-components";

export const MainHeaderWrapper = styled.div`
  padding: 0px 45px;
  padding-top: 25px;
  .ant-row {
    justify-content: space-between;
  }
  .logo {
    cursor: pointer;
  }
  .rightHeader {
    display: flex;
    gap: 15px;
    align-items: center;
    h1 {
      font-size: 1rem;
      margin-bottom: 0;
      color: #302f2f;
      font-weight: 600;
    }
    button {
      background: #ffa000;
      color: white;
      font-weight: 600;
      &:hover {
        background: #ffb029;
        border-color: #ffa000;
      }
    }
  }

  @media screen and (max-width: 482px) {
    padding: 0px 25px;
    padding-top: 25px;
    .logo {
      img{
        width: 96px;
      }
    }
  }
`;
