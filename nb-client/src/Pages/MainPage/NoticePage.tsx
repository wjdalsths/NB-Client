import React from "react";
import Header from "../../Components/Header/Header";
import * as S from "./style";
import SideBar from "../../Components/SideBar/SideBar";
import NoticeContents from "../../Components/NoticeContents/NoticeContents";

const MainPage = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <NoticeContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default MainPage;
