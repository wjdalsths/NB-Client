import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const ListType = styled.div<chgColor>`
  display: flex;
  width: 100%;
  height: 3.5rem;
  p {
    margin: 0;
    font-size: 2rem;
    margin-left: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p:first-child {
    width: 33.3%;
    background-color: ${(props) =>
      props.state === "free" ? "#b9a0fe" : "lightgray"};
    border-radius: 10px 0 0 0;
  }
  p:nth-child(2) {
    width: 33.3%;
    background-color: ${(props) =>
      props.state === "story" ? "#b9a0fe" : "lightgray"};
  }
  p:nth-child(3) {
    width: 33.3%;
    background-color: ${(props) =>
      props.state === "question" ? "#b9a0fe" : "lightgray"};
    border-radius: 0 10px 0 0;
  }
`;
type chgColor = { state: string };

export const freeItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* justify-content: center; */
`;

export const SnQItems = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    width: 100%;
    height: 3rem;
    background: #ffffff;
    border-bottom: 2px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.25rem;
    padding-left: 10px;
  }
`;

export const blogitem = styled.div`
  width: 100%;
  height: 3rem;
  background: #ffffff;
  box-sizing: border-box;
  border-bottom: 2px solid;
  animation: fadeIn 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 3;
      transform: none;
    }
  }
  p {
    height: 3rem;
    margin: 0.3rem 0 0 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p:first-child {
    width: 10%;
  }
  p:nth-child(2) {
    width: 70%;
    margin-left: 2rem;
    justify-content: flex-start;
  }
  p:nth-child(3) {
    width: 10%;
  }
  p:nth-child(4) {
    width: 10%;
  }
`;

export const infobox = styled.div`
  display: flex;
`;
