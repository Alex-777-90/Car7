import styled from "styled-components";

export const StyledSearch = styled.div`

    /* background-color:blue; */
    height:100px;
    margin-top:20px;


  form{
     display:flex;
     justify-content:space-around;
     align-items:center;
     background-color:rgb(243, 240, 239);
     width:97%;
     height:100px;
     margin:0 auto;
     flex-wrap:wrap;
     box-shadow: -6px 6px 40px rgb(191, 193, 193) ;
     border-radius:10px;

  }

  .select_1{
    /* background-color:green; */
    height:40px;
    width:180px
  }

  .select_1 select {
      /* background-color:red; */
      height:40px;
      width:180px;
      border-radius:7px;
      text-align:center;
      color:rgb(88, 86, 86);
      border-color:rgb(156, 153, 153);
  }

  button{
      display:flex;
      justify-content:space-around;
      border:none;
      cursor: pointer;
      color:whitesmoke;
      background-color:rgb(88, 86, 86);
      border-radius:7px;
      padding:15px;
      width:180px;
      font-size:1.2em;
     
     
  }

  button p {
    margin-left:-20px
  }

  button:hover{
     background-color:rgb(51, 50, 50);
  }

`