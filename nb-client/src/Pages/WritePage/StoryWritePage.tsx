import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import StoryWrite from "../../Components/StoryWrite/StoryWrite";
import { StoryType } from "../../types";
import { useParams } from "react-router-dom";
import { getWatchStory } from "../../Api/Story";

const StoryWritePage = () => {
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
            <StoryWrite storyWatch={storyWatch} />
          ) : (
            <StoryWrite storyWatch={null} />
          )}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default StoryWritePage;
