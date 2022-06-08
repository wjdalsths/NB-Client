import styled from "styled-components";

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 15rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;
export const Input = styled.input`
  font-weight: bold;
  width: 100%;
  height: 5vh;
  border-radius: 50px;
  border: 5px solid #6a5acd;
  padding-left: 1.25rem;
  margin-top: 1vh;
  font-size: 1rem;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  /* width: 13vw; */
`;
export const Btn = styled.button`
  width: 8rem;
  height: 4vh;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: #6a5acd;
  color: #fff;
  font-size: 1.25rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
  :first-child {
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: #f8f9fa;
    color: #6a5acd;
    border: 3px solid #6a5acd;
  }
`;
