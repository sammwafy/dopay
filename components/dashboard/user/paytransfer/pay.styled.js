import styled from "styled-components";

export const PayContainer = styled.div`
display:flex;
margin: 20px auto;
width:80%;
flex-direction: column;

background:white;
border-radius:5px;
align-items:center;
justify-content:center;

 
.top{
    align-items:center;
justify-content:center;
display:flex;

}
.cards{
    display:flex;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
   

    }
}





`
export const Wrapper= styled.div`
display:flex;
align-items:center;
justify-content:center;
.ant-typography {
        color:  green ;
        
    }

`