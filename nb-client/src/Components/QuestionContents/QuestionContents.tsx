import React, { useState, useEffect } from "react";
import * as S from "./style";
import { contentQuestion } from "../../Api/Question";
import { useNavigate } from "react-router-dom";
import dateFillter from "../../Utils/Libs/dateFillter";

const QuestionContents = () => {
  const [question, setQuestion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    contentQuestion()
      .then((res: any) => {
        console.log(res.data);
        setQuestion(res.data);
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <S.Positioner>
        <S.ListType>
          <p>ID</p>
          <p>TITLE</p>
          <p>USER</p>
          <p>DAY</p>
        </S.ListType>
        <S.items>
          {question.length !== 0 ? (
            question.map((item: any) => (
              <S.blogitem
                key={item.id}
                onClick={() => navigate(`/question/${item.id}`)}
              >
                <S.infobox>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.create_user_id}</p>
                  <p>{dateFillter(item.create_date)}</p>
                </S.infobox>
              </S.blogitem>
            ))
          ) : (
            <span>게시물이 없습니다.</span>
          )}
        </S.items>
      </S.Positioner>
    </>
  );
};

export default QuestionContents;
