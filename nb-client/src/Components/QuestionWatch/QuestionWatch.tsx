import React from "react";
import * as S from "./style";
import { QuestionType } from "../../types";
import { deleteQuestion } from "../../Api/Question";
import getUserId from "../../Utils/Libs/getUserId";
import dateFillter from "../../Utils/Libs/dateFillter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface QuestionTypeProps {
  questionWatch: QuestionType;
}

const QuestionWatch = ({ questionWatch }: QuestionTypeProps) => {
  const navigate = useNavigate();

  const delQuestion = (e: any) => {
    e.preventDefault();

    deleteQuestion(questionWatch.id)
      .then(() => {
        toast.success("삭제되었습니다.");
        navigate("/question");
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <S.Positioner>
        <S.Board>
          <S.Titlebox>
            <S.Title>{questionWatch.title}</S.Title>
            <S.TitleUser>{questionWatch.create_user_id}</S.TitleUser>
          </S.Titlebox>
          <S.Infobox>
            <p>{questionWatch.context}</p>
          </S.Infobox>
          <S.items>
            <span>
              <p>게시날짜 : {dateFillter(questionWatch.create_date)}</p>
              <p>수정날짜 : {dateFillter(questionWatch.correction_date)}</p>
            </span>

            <S.BtnWrapper>
              {getUserId === questionWatch.create_user_id ? (
                <>
                  <S.chgBtn
                    onClick={() => {
                      navigate(`/questionWrite/${questionWatch.id}`);
                    }}
                  >
                    수정
                  </S.chgBtn>
                  <S.delBtn
                    onClick={(e: any) => {
                      delQuestion(e);
                    }}
                  >
                    삭제
                  </S.delBtn>
                </>
              ) : (
                <p></p>
              )}
            </S.BtnWrapper>
          </S.items>
        </S.Board>
      </S.Positioner>
    </>
  );
};

export default QuestionWatch;
