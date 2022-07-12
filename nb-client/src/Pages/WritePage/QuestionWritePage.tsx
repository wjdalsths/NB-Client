import React from "react";
import * as S from "../MainPage/style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import QuestionWrite from "../../Components/QuestionWrite/QuestionWrite";

const QuestionWritePage = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <QuestionWrite />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default QuestionWritePage;
