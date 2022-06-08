import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 8vh;
  display: flex;
  flex-direction: column;
`;
export const Board = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Imgboard = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.div`
  width: 100%;
  height: 38vh;
  border: 3px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px; */
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
  }
  label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
  }
`;

export const ImgBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  input {
    display: none;
  }
  button {
    background-color: #6a5acd;
    /* background-color: #b9a0fe; */
    color: #ffffff;
    padding: 0;
    font-size: 1.1rem;
    width: 6vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    box-sizing: border-box;
    :hover {
      background-color: #b9a0fe;
      /* background-color: #6a5acd; */
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 10vh;
  background: white;
  display: flex;
  margin-top: 1rem;
  input {
    width: 100%;
    height: 100%;
    padding: 0 1vw;
    font-size: 3rem;
    font-weight: bolder;
    border-radius: 5px;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px; */
    border: 3px solid black;
    ::placeholder {
      font-size: 3rem;
    }
  }
`;
export const Infobox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3.5vh;
  /* border: 3px solid black; */

  textarea {
    width: 100%;
    height: 55vh;
    padding: 2vh 0 0 1vw;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px; */
    box-sizing: border-box;
    border: solid 3px black;
    border-radius: 5px;
    font-size: 1.5rem;
    outline: none;
    resize: none;
    ::placeholder {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
export const SubButton = styled.button`
  margin: 3.5vh 0;
  background-color: #6a5acd;
  color: white;
  border-radius: 10px;
  font-size: 1.5rem;
  border: none;
  height: 5vh;
  text-align: center;
  /* box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px; */
  :hover {
    background-color: #b9a0fe;
  }
`;
