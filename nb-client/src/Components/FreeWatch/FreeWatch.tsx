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
          <S.Title>
            <p>{freeWatch.title}</p>
          </S.Title>
          <S.Infobox>
            <p>{freeWatch.context}</p>
          </S.Infobox>
        </S.Board>
      </S.Positioner>
    </>
  );
};

export default FreeWatch;
