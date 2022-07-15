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

export const Img = styled.div`
  width: 100%;
  height: 38vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 5px;
  /* box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px; */
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 3rem;
  font-weight: bolder;
  p {
    width: 100%;
    padding: 0 0 0 1vw;
  }
`;

export const Infobox = styled.div`
  width: 100%;
  display: flex;
  margin: 3.5vh 0;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  p {
    width: 100%;
    height: 55vh;
    padding: 2vh 0 0 1vw;
    border-radius: 5px;
  }
`;
