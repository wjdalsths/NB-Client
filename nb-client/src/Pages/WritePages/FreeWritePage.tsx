import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import FreeWrite from "../../Components/FreeWrite/FreeWrite";

const FreeWritePage = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <FreeWrite />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default FreeWritePage;
