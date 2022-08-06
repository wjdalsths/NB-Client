import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import StoryContents from "../../Components/StoryContents/StoryContents";

const StoryPage = () => {
  const page = "story";

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          <StoryContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default StoryPage;
