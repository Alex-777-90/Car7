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



`