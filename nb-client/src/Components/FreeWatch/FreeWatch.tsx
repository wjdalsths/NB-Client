import React, { useEffect, useState } from "react";
import * as S from "./style";
import { FreeType } from "../../types";
import { getCommentFree, writeCommentFree } from "../../Api/Free";
import FreeCommentItem from "../FreeCommentItem/FreeCommentItem";
import { toast } from "react-toastify";

interface FreeTypeProps {
  freeWatch: FreeType;
}

const FreeWatch = ({ freeWatch }: FreeTypeProps) => {
  const [comment, setComment] = useState([]);
  const [addComment, setAddComment] = useState("");
  const [temp, setTemp] = useState(true);

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
      writeCommentFree(addComment, userId, freeWatch.id)
        .then(() => {
          toast.success("게시되었습니다.");
          setAddComment("");
          setTemp(!temp);
        })
        .catch((error: any) => {
          console.log(error.mesaage);
        });
    }
  };

  useEffect(() => {
    getCommentFree(freeWatch.id)
      .then((res: any) => {
        console.log(res.data);
        setComment(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [temp]);
  return (
    <>
      <S.Positioner>
        <S.Board>
          <S.Img>
            <img src={"data:image/png;base64," + freeWatch.img1} />
          </S.Img>
          <S.Titlebox>
            <S.Title>{freeWatch.title}</S.Title>
            <S.TitleUser>{freeWatch.create_user}</S.TitleUser>
          </S.Titlebox>
          <S.Infobox>
            <p>{freeWatch.context}</p>
          </S.Infobox>
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
          <S.Items>
            {comment ? (
              comment.map((item: any) => (
                <FreeCommentItem
                  id={item.id}
                  context={item.context}
                  create_id_user_fr={item.create_id_user_fr}
                  comment_NB={item.comment_NB}
                  create_date={item.create_date}
                  correction_date={item.correction_date}
                />
              ))
            ) : (
              <p>댓글이 없습니다.</p>
            )}
          </S.Items>
        </S.Commentbox>
      </S.Positioner>
    </>
  );
};

export default FreeWatch;
