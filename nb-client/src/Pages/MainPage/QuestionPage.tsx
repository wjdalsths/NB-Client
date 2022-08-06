import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import QuestionContents from "../../Components/QuestionContents/QuestionContents";
const QuestionPage = () => {
  const page = "question";

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          <QuestionContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default QuestionPage;
