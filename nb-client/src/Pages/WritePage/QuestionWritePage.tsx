import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import QuestionWrite from "../../Components/QuestionWrite/QuestionWrite";
import { QuestionType } from "../../types";
import { useParams } from "react-router-dom";
import { getWatchQuestion } from "../../Api/Question";

const QuestionWritePage = () => {
  const param = useParams();
  const [questionWatch, setQuestionWatch] = useState<QuestionType>();
  const page = "question";

  useEffect(() => {
    async function ReturnWatchFree() {
      getWatchQuestion(param.id).then((res) => {
        setQuestionWatch(res?.data);
      });
    }
    ReturnWatchFree();
  }, []);

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          {questionWatch ? (
            <QuestionWrite questionWatch={questionWatch} />
          ) : (
            <QuestionWrite questionWatch={null} />
          )}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default QuestionWritePage;
