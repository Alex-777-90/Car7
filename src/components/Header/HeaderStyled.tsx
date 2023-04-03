import styled from "styled-components";


export const StyledHeader = styled.div`

 @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    header {
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color:rgb(243, 174, 70);
        /* background: rgb(255, 190, 0); */
        height:90px;
       
    }

    img{
       width:80px;
       margin-left:30px;
    }

    .iconUser{
       /* background-color:blue; */
       width:10%;
       font-size:150%;
       cursor: pointer;
       color:rgb(88, 86, 86);
       text-align:center;
       margin-right:50px;
    }
    .iconUser p {
        font-size:70%;
        font-family: 'Bebas Neue', cursive;
        
    }

    .about_company{
        display:flex;
        align-items:center;
        /* background-color:green; */
       
    }

    .about_company p{
        padding-left:20px;
        font-family: 'Bebas Neue', cursive;
        color:rgb(88, 86, 86);
       
    }

    .about_company a{
        text-decoration: none; 
       
    }

    .menu {
        position: absolute;
        top: 10%;
        left: 75%;
        height:50wh;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 20px;
        padding-top:20px;
        z-index: 1;
        text-align:center;
   }
 
   .menu span {
     margin-right:127px;
     font-weight:bold;
     color:gray;
   }


`