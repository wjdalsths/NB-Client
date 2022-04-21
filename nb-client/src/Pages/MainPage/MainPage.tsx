import React from "react";
import Header from "../../Components/Header/Header";
import BlogContents from "../../Components/BlogContents/BlogContents";
import * as S from "./style";
import SideBar from "../../Components/SideBar/SideBar";

const MainPage = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Header />
          <BlogContents />
        </S.Container>
        <SideBar />
      </S.Wrapper>
    </>
  );
};

export default MainPage;
