import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import QuestionWatch from "../../Components/QuestionWatch/QuestionWatch";
import SideBar from "../../Components/SideBar/SideBar";
import { QuestionType } from "../../types";
import { getWatchQuestion } from "../../Api/Question";

const QuestionWatchPage: React.FC = () => {
  const param = useParams();
  const [questionWatch, setQuestionWatch] = useState<QuestionType>();

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
        <Header />
        <S.Container>
          {questionWatch ? (
            <QuestionWatch questionWatch={questionWatch} />
          ) : (
            <div>로딩중</div>
          )}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default QuestionWatchPage;
