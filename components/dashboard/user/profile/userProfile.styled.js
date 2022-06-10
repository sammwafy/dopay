import styled from "styled-components";


 export const Container = styled.div` 

display:flex;
margin: 15px auto;
width:88%;
flex-direction: column;

background:white;




.top{
    display:flex;
 
 padding: 0px 20px;
 height:60px;
 margin-bottom:50px;
 .profile{
    display:flex;
    align-items:center;
    border:7px solid  rgba(38, 184, 147, 0.5);
    border-radius:50%;
    .img{
        border-radius:50%;
    }
 }
 .info{
    display:flex;
    flex-direction:column;
    margin : 10px 0px 0px 40px;
    @media screen and (max-width: 700px) {
      margin:0px 0px 0px 20px;
    }
    h4{
      color: #06AA8D ;
    }
    p{
      @media screen and (max-width: 700px) {
      font-size:12px;
      
}
    }
 }
}

.bottom{
   display:flex;
   margin-top:15px;
  
  

   
}
.userform{
 width: 100%;
 @media screen and (max-width: 700px) {
      width:100%;
      
}

}


`