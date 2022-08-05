import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as SVG from "../../SVG";
import { StoryType } from "../../types";
import {
  getCommentStory,
  getLikeStory,
  upLikeStory,
  writeCommentStory,
} from "../../Api/Story";
import StoryCommentItem from "../StoryCommentItem/StoryCommentItem";
import getUserId from "../../Utils/Libs/getUserId";
import dateFillter from "../../Utils/Libs/dateFillter";
import { toast } from "react-toastify";

interface StoryTypeProps {
  storyWatch: StoryType;
}

const StoryWatch = ({ storyWatch }: StoryTypeProps) => {
  const [comment, setComment] = useState([]);
  const [addComment, setAddComment] = useState("");
  const [cntLike, setLike] = useState(0);
  const [temp, setTemp] = useState(true);

  const chgTemp = (value: boolean) => {
    setTemp(value);
  };

  const onChangeComment = (e: any) => {
    setAddComment(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    const userId = Number(localStorage.getItem("id"));
    let pattern = /^\s\s*$/;
    if (addComment.match(pattern) || addComment === "") {
      toast.warning("내용을 입력해주세요.");
    } else {
      writeCommentStory(addComment, userId, storyWatch.id)
        .then(() => {
          toast.success("게시되었습니다.");
          setAddComment("");
          setTemp(!temp);
        })
        .catch((error: any) => {
          console.log(error.message);
        });
    }
  };
  const getLikeCnt = () => {
    getLikeStory(storyWatch.id)
      .then((res: any) => {
        setLike(res.data);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };

  const onLike = () => {
    upLikeStory(getUserId, storyWatch.id)
      .then(() => getLikeCnt())
      .catch((error: any) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getCommentStory(storyWatch.id)
      .then((res: any) => {
        console.log(res.data);
        setComment(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
    getLikeCnt();
  }, [temp]);
  return (
    <>
      <S.Positioner>
        <S.Board>
          <S.Titlebox>
            <S.Title>{storyWatch.title}</S.Title>
            <S.TitleUser>{storyWatch.create_user}</S.TitleUser>
          </S.Titlebox>
          <S.Infobox>
            <p>{storyWatch.context}</p>
          </S.Infobox>
          <S.items>
            <span>
              <p>게시날짜 : {dateFillter(storyWatch.create_date)}</p>
              <p>수정날짜 : {dateFillter(storyWatch.correction_date)}</p>
            </span>

            <S.BtnWrapper>
              {getUserId === storyWatch.create_user ? (
                <>
                  <S.chgBtn onClick={() => {}}>수정</S.chgBtn>
                  <S.delBtn onClick={(e: any) => {}}>삭제</S.delBtn>
                </>
              ) : (
                <p></p>
              )}
              <S.LikeBtn onClick={onLike}>
                <SVG.Like />
                <p>{cntLike}</p>
              </S.LikeBtn>
            </S.BtnWrapper>
          </S.items>
        </S.Board>
        <S.Commentbox>
          <p>댓글</p>
          <S.CommentInput>
            <input
              type={"text"}
              value={addComment}
              placeholder={"댓글 추가..."}
              onChange={onChangeComment}
              onKeyPress={(e) => {
                if (e.key === "Enter") onSubmit(e);
              }}
            />
            <S.SubButton onClick={onSubmit}>추가</S.SubButton>
          </S.CommentInput>
          <S.CommentItems>
            {comment ? (
              comment.map((item: any) => (
                <StoryCommentItem
                  id={item.id}
                  context={item.context}
                  create_id_user_st={item.create_id_user_st}
                  comment_Story={item.comment_Story}
                  create_date={item.create_date}
                  correction_date={item.correction_date}
                  chgTemp={chgTemp}
                  temp={temp}
                />
              ))
            ) : (
              <p>댓글이 없습니다.</p>
            )}
          </S.CommentItems>
        </S.Commentbox>
      </S.Positioner>
    </>
  );
};

export default StoryWatch;
