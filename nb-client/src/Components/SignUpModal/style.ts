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
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: white;
  width: 550px;
  height: 500px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;
export const Logo = styled.a`
  font-family: "Kodchasan-Light";
  font-weight: bold;
  color: #6a5acd;
  font-size: 5.5rem;
  margin: 0;
`;
export const CloseBtn = styled.button`
  position: absolute;
  font-size: 3rem;
  top: 1.5rem;
  right: 1.5rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 1rem;
`;
// export const BtnWrapper = styled.div`
//   margin-bottom: 45px;
//   width: 55%;
//   margin-top: 2rem;
//   display: flex;
//   justify-content: center;
// `;

// export const SignUpBtn = styled.button`
//   font-family: "Kodchasan-Light";
//   width: 100%;
//   height: 50px;
//   border-radius: 100px;
//   background-color: #6a5acd;
//   color: white;
//   font-size: 1.7rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     background-color: white;
//     color: black;
//     border: 4px solid #6a5acd;
//   }
// `;
