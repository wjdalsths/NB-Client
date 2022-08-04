import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as SVG from "../../SVG";
import { StoryType } from "../../types";
import { getLikeStory, upLikeStory } from "../../Api/Story";
import getUserId from "../../Utils/Libs/getUserId";
import dateFillter from "../../Utils/Libs/dateFillter";

interface StoryTypeProps {
  storyWatch: StoryType;
}

const StoryWatch = ({ storyWatch }: StoryTypeProps) => {
  const [cntLike, setLike] = useState(0);

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
    getLikeCnt();
  }, []);
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
      </S.Positioner>
    </>
  );
};

export default StoryWatch;
