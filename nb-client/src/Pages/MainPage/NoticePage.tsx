import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import NoticeContents from "../../Components/NoticeContents/NoticeContents";

const NoticePage = () => {
  const page = "notice";

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          <NoticeContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default NoticePage;
