import styled from "styled-components";

export const Container = styled.div`
  /* margin-right: 15rem; */
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1728px;
  /* width: 80%; */
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1919px) {
    width: 1376px;
  }
`;
