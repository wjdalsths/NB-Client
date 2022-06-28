import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import NoticeContents from "../../Components/NoticeContents/NoticeContents";

const NoticePage = () => {
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

export default NoticePage;
