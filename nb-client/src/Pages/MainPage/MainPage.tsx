import React from "react";
import Header from "../../Components/Header/Header";
import BlogContents from "../../Components/BlogContents/BlogContents";
import * as S from "./style";
const MainPage = () => {
  return (
    <>
      <S.Container>
        <Header />
        <BlogContents />
      </S.Container>
    </>
  );
};

export default MainPage;
