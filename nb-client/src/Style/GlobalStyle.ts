import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
   html body {
    /* width: 1728px;  */
    margin:0;
    padding:0;
    /* background:#F8F9FA; */
  }
  
  input{
    background: none;
    outline: none;
    border: none;
  }
  button {
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
  }
  label {
    cursor: pointer;
  }
  svg{
    margin-right:0.5rem;
  }

`;
