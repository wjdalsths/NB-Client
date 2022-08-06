import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import StoryWatch from "../../Components/StoryWatch/StoryWatch";
import SideBar from "../../Components/SideBar/SideBar";
import { StoryType } from "../../types";
import { getWatchStory } from "../../Api/Story";

const StortWatchPage: React.FC = () => {
  const param = useParams();
  const [storyWatch, setStoryWatch] = useState<StoryType>();
  const page = "story";

  useEffect(() => {
    async function ReturnWatchFree() {
      getWatchStory(param.id).then((res) => {
        setStoryWatch(res?.data);
      });
    }
    ReturnWatchFree();
  }, []);

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          {storyWatch ? (
            <StoryWatch storyWatch={storyWatch} />
          ) : (
            <div>로딩중</div>
          )}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default StortWatchPage;
