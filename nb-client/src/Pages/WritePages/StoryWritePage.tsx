import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import StoryWrite from "../../Components/StroyWrite/StoryWrite";

const FreeWritePage = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <StoryWrite />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default FreeWritePage;
