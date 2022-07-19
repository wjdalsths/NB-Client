import React from "react";
import * as S from "./style";
import { FreeType } from "../../types";

interface FreeTypeProps {
  freeWatch: FreeType;
}

const FreeWatch = ({ freeWatch }: FreeTypeProps) => {
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
          <S.Commentbox>
            <p>댓글</p>
            <S.CommentInput>
              <input placeholder="댓글 추가..." />
              <S.SubButton>추가</S.SubButton>
            </S.CommentInput>
          </S.Commentbox>
        </S.Board>
      </S.Positioner>
    </>
  );
};

export default FreeWatch;
