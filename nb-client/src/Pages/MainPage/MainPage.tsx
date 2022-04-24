import React from "react";
import Header from "../../Components/Header/Header";
import BlogContents from "../../Components/BlogContents/BlogContents";
import * as S from "./style";
import SideBar from "../../Components/SideBar/SideBar";

const MainPage = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <BlogContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default MainPage;
