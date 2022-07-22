import React from "react";
import * as S from "./style";
import { FreeCommentType } from "../../types";

const FreeCommentItem: React.FC<FreeCommentType> = ({
  id,
  context,
  create_id_user_fr,
  comment_NB,
  create_date,
  correction_date,
}) => {
  return (
    <>
      <S.CommentItem>
        <S.CreateInformation>
          <S.CreateUser>{create_id_user_fr}</S.CreateUser>
          <S.CreateDate>{create_date}</S.CreateDate>
        </S.CreateInformation>
        <S.CommentContent>
          <S.Comment>{context}</S.Comment>
          <S.BtnWrapper>
            <S.Btn>수정</S.Btn>
            <S.Btn>삭제</S.Btn>
          </S.BtnWrapper>
        </S.CommentContent>
      </S.CommentItem>
    </>
  );
};

export default FreeCommentItem;