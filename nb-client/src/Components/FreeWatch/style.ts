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
  /* box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px; */
  /* overflow: hidden; */
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
export const TitleUser = styled.div`
  padding: 0 1vw 0 0;
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
`;

export const BtnWrapper = styled.button`
  display: flex;
  align-items: center;
  /* margin-bottom: -20px; */
`;
export const chgBtn = styled.button`
  width: 60px;
  height: 25px;
  margin-right: 5px;

  background-color: #6a5acd;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 50px;
  :hover {
    background-color: #b9a0fe;
  }
`;
export const delBtn = styled.button`
  width: 60px;
  height: 25px;
  margin-right: 5px;

  background-color: #6a5acd;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 50px;
  :hover {
    background-color: #b9a0fe;
    color: red;
  }
`;

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  SVG {
    width: 36px;
    height: 33px;
  }
  p {
    font-size: 25px;
    padding-top: 6px;
  }
`;

export const Commentbox = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid black;
  p {
    font-size: 25px;
  }
`;

export const CommentInput = styled.div`
  width: 100%;
  height: 35px;
  margin: 1rem;
  margin-bottom: 60px;
  border-bottom: 2px solid black;
  display: flex;
  input {
    font-size: 15px;
    width: 100%;
  }
`;

export const SubButton = styled.button`
  background-color: #6a5acd;
  color: white;
  border: none;
  text-align: center;
  font-size: 15px;
  width: 80px;
  height: 30px;
  border-radius: 50px;
  :hover {
    background-color: #b9a0fe;
  }
`;

export const CommentItems = styled.div`
  width: 100%;
`;
