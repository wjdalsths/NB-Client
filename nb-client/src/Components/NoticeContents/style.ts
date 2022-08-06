import styled from "styled-components";

export const Positioner = styled.div`
  width: 100%;
  margin: 0 3vh;
`;

export const ListType = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  p {
    margin: 0;
    font-size: 2.5rem;
    margin-left: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p:first-child {
    width: 10%;
    background-color: lightgray;
    border-radius: 10px 0 0 0;
  }
  p:nth-child(2) {
    width: 70%;
    background-color: lightgray;
  }
  p:nth-child(3) {
    width: 10%;
    background-color: lightgray;
  }
  p:nth-child(4) {
    width: 10%;
    background-color: lightgray;
    border-radius: 0 10px 0 0;
  }
`;

export const items = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
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
export const title = styled.h4`
  font-size: 1rem;
  /* word-break: break-word; */
  //텍스트가 콘텐츠 밖으로오버플로할때 줄을 바꿀지 결정
  white-space: nowrap;
  //속성은 요소가 공백 문자를 처리하는 법을 지정합니다.
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0.6rem 0;
`;
