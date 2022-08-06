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
  margin-bottom: 5rem;
`;

export const Img = styled.div`
  width: 100%;
  height: 38vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Titlebox = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 3rem;
  font-weight: bolder;
`;
export const Title = styled.div`
  width: 100%;
  padding: 0 0 0 1vw;
`;

export const Infobox = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  margin: 3.5vh 0;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  p {
    width: 100%;
    padding: 2vh 0 0 1vw;
    border-radius: 5px;
  }
`;

export const items = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  p {
    display: flex;
    flex-direction: column;
  }
`;
