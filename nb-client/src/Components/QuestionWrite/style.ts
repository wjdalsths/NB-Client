import styled from "styled-components";

export const Positioner = styled.div`
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

  textarea {
    width: 100%;
    height: 55vh;
    padding: 2vh 0 0 1vw;
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
  :hover {
    background-color: #b9a0fe;
  }
`;
