import React from "react";
import * as S from "./style";
import { NoticeType } from "../../types";
import dateFillter from "../../Utils/Libs/dateFillter";

interface NoticeTypeProps {
  noticeWatch: NoticeType;
}

const NoticeWatch = ({ noticeWatch }: NoticeTypeProps) => {
  return (
    <>
      <S.Positioner>
        <S.Board>
          <S.Img>
            <img src={"data:image/png;base64," + noticeWatch.img1} />
          </S.Img>
          <S.Titlebox>
            <S.Title>{noticeWatch.title}</S.Title>
          </S.Titlebox>
          <S.Infobox>
            <p>{noticeWatch.context}</p>
          </S.Infobox>
          <S.items>
            <span>
              <p>게시날짜 : {dateFillter(noticeWatch.create_date)}</p>
              <p>수정날짜 : {dateFillter(noticeWatch.correction_date)}</p>
            </span>
          </S.items>
        </S.Board>
      </S.Positioner>
    </>
  );
};

export default NoticeWatch;
