import styled from "styled-components";

export const blogitem = styled.div`
  /* width: 15.5rem; */
  width: 250px;
  height: 250px;
  margin: 1rem;
  background: #ffffff;
  box-sizing: border-box;
  border: 2px solid black;

  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 16px 0px;
  /* transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s; */
  /* overflow: hidden; */
  animation: fadeIn 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
`;

export const imgbox = styled.div`
  img {
    width: 100%;
    height: 180px;
  }
`;
export const infobox = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
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
export const info = styled.p``;
