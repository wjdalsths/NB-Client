import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import StoryContents from "../../Components/StoryContents/StoryContents";

const StoryPage = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <StoryContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default StoryPage;
