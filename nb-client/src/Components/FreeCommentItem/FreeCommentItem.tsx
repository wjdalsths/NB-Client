import React, { useState } from "react";
import * as S from "./style";
import { FreeCommentType } from "../../types";
import getUserId from "../../Utils/Libs/getUserId";
import { changeCommentFree } from "../../Api/Free";
import { toast } from "react-toastify";

const FreeCommentItem: React.FC<FreeCommentType> = ({
  id,
  context,
  create_id_user_fr,
  comment_NB,
  create_date,
  correction_date,
  chgTemp,
  temp,
}) => {
  const [chgCommentState, setChgCommentState] = useState(false);
  const [chgComment, setchgComment] = useState(context);

  const onChangeComment = (e: any) => {
    setchgComment(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    let pattern = /^\s\s*$/;
    if (chgComment.match(pattern) || chgComment === "") {
      toast.warning("내용을 입력해주세요.");
    } else {
      console.log(comment_NB);

      changeCommentFree(id, chgComment, getUserId, comment_NB)
        .then(() => {
          toast.success("수정되었습니다.");
          chgTemp(!temp);
        })
        .catch((error: any) => {
          console.log(error.mesaage);
        });
    }
  };

  return (
    <>
      <S.CommentItem>
        <S.CreateInformation>
          <S.CreateUser>{create_id_user_fr}</S.CreateUser>
          <S.CreateDate>{create_date}</S.CreateDate>
        </S.CreateInformation>
        <S.CommentContent>
          {chgCommentState ? (
            <S.Comment>
              <S.chgComment
                type={"text"}
                value={chgComment}
                onChange={onChangeComment}
              />
            </S.Comment>
          ) : (
            <S.Comment>{context}</S.Comment>
          )}
          {getUserId === create_id_user_fr ? (
            <S.BtnWrapper>
              {chgCommentState ? (
                <S.chgBtn
                  onClick={(e: any) => {
                    setChgCommentState(!chgCommentState);
                    onSubmit(e);
                  }}
                  state={chgCommentState}
                >
                  댓글 수정
                </S.chgBtn>
              ) : (
                <S.chgBtn
                  onClick={() => {
                    setChgCommentState(!chgCommentState);
                  }}
                  state={chgCommentState}
                >
                  수정
                </S.chgBtn>
              )}
              <S.delBtn>삭제</S.delBtn>
            </S.BtnWrapper>
          ) : (
            <p></p>
          )}
        </S.CommentContent>
      </S.CommentItem>
    </>
  );
};

export default FreeCommentItem;
