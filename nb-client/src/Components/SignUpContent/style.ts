import styled from "styled-components";

export const Positioner = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
`;
export const input = styled.input`
  font-family: "Kodchasan-Light";
  font-weight: bold;
  width: 100%;
  height: 5vh;
  border-radius: 50px;
  border: 5px solid #6a5acd;
  padding-left: 1.25rem;
  margin-top: 1vh;
  font-size: 14px;
  box-sizing: border-box;
`;
export const showPwBtn = styled.button`
  position: relative;
  opacity: 50%;
  margin-right: 0.7rem;
`;
export const pwWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  border-radius: 50px;
  border: 5px solid #6a5acd;
  padding-left: 1.25rem;
  margin-top: 1vh;
  box-sizing: border-box;
  input {
    font-family: "Kodchasan-Light";
    font-weight: bold;
    width: 100%;
    font-size: 14px;
  }
`;

export const BtnWrapper = styled.div`
  margin-bottom: 45px;
  width: 55%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const SignUpBtn = styled.button`
  font-family: "Kodchasan-Light";
  width: 100%;
  height: 50px;
  border-radius: 100px;
  background-color: #6a5acd;
  color: white;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 4px solid #6a5acd;
  }
`;
