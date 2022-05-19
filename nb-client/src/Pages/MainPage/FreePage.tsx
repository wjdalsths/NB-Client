import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import BlogContents from "../../Components/BlogContents/BlogContents";
import SideBar from "../../Components/SideBar/SideBar";

const FreePage = () => {
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

export default FreePage;
