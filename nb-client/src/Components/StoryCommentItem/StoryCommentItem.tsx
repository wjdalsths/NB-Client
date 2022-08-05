import React, { useState } from "react";
import * as S from "./style";
import { StoryCommentType } from "../../types";
import getUserId from "../../Utils/Libs/getUserId";
import { changeCommentStory, deleteCommentStory } from "../../Api/Story";
import { toast } from "react-toastify";
import dateFillter from "../../Utils/Libs/dateFillter";

const StoryCommentItem: React.FC<StoryCommentType> = ({
  id,
  context,
  create_id_user_st,
  comment_Story,
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
      changeCommentStory(id, chgComment, getUserId, comment_Story)
        .then(() => {
          toast.success("수정되었습니다.");
          chgTemp(!temp);
        })
        .catch((error: any) => {
          console.log(error.mesaage);
        });
    }
  };

  const delComment = (e: any) => {
    e.preventDefault();

    deleteCommentStory(id)
      .then(() => {
        toast.success("삭제되었습니다.");
        chgTemp(!temp);
      })
      .catch((error: any) => {
        console.log(error.mesaage);
      });
  };

  return (
    <>
      <S.CommentItem>
        <S.CreateInformation>
          <S.CreateUser>{create_id_user_st}</S.CreateUser>
          <S.CreateDate>{dateFillter(create_date)}</S.CreateDate>
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
          {getUserId === create_id_user_st ? (
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
              <S.delBtn
                onClick={(e: any) => {
                  delComment(e);
                }}
              >
                삭제
              </S.delBtn>
            </S.BtnWrapper>
          ) : (
            <p></p>
          )}
        </S.CommentContent>
      </S.CommentItem>
    </>
  );
};

export default StoryCommentItem;
