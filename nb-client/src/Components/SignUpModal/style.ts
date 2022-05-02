import { strictEqual } from "assert";
import styled from "styled-components";

export const Positioner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kodchasan-Light";
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
  opacity: 0.7;
`;

export const Container = styled.div`
  position: relative;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: white;
  width: 650px;
  height: 650px;
  display: flex;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 550px;
    height: 550px;
  }
  @media (max-width: 700px) {
    width: 450px;
    height: 450px;
  }
`;

export const Title = styled.div``;
export const Logo = styled.a`
  font-family: "Kodchasan-Light";
  font-weight: bold;
  color: #6a5acd;
  font-size: 5rem;
  margin: 0;
`;
export const CloseBtn = styled.button`
  position: absolute;
  font-size: 3rem;
  display: flex;
  justify-content: flex-end;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 45px;
  width: 230px;
  display: flex;
  justify-content: center;
`;

export const SignUpBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 1400px) {
    width: 85px;
    height: 35px;
    font-size: 16px;
  }
  @media (max-width: 700px) {
    width: 70px;
    height: 30px;
    font-size: 12px;
  }
`;
