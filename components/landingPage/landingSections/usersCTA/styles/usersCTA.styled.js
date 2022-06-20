import styled from "styled-components";

export const UsersCTAWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
  height: 100%;
  padding: 0 45px;
  .usersCTA {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    padding-top: 40px;
    height: 400px;
    width: 100%;
    h2,h3{
      color: ${(props) => props.currentTheme === 'dark' ? '#fff' : '#2E7D32'} ;
      margin-bottom: 0;
    }

    h2{
      font-size: 2.8rem;
      font-weight: 600;
    }
    h3{
      font-size: 1.2rem;
      font-weight: 500;
    }


  }
`;
