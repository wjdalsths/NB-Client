import React, { useEffect, useState } from "react";
import * as S from "./style";
import { FreeType } from "../../types";
import { commentWriteFree } from "../../Api/Free";
import FreeCommentItem from "../FreeCommentItem/FreeCommentItem";

interface FreeTypeProps {
  freeWatch: FreeType;
}

const FreeWatch = ({ freeWatch }: FreeTypeProps) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    commentWriteFree(freeWatch.id)
      .then((res: any) => {
        console.log(res.data);
        setComment(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
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
            <input placeholder="댓글 추가..." />
            <S.SubButton>추가</S.SubButton>
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
