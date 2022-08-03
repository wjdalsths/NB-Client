import React, { useState, useEffect } from "react";
import * as S from "./style";
import { contentStory } from "../../Api/Story";
const StoryContents = () => {
  const [stroy, setStory] = useState([]);

  useEffect(() => {
    contentStory()
      .then((res: any) => {
        console.log(res);
        setStory(res.data);
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <S.Positioner>
        <S.ListType>
          <p>ID</p>
          <p>TITLE</p>
          <p>USER</p>
          <p>DAY</p>
        </S.ListType>
        <S.items>
          {stroy.map((item: any) => (
            <S.blogitem key={item.id}>
              <S.infobox>
                <p>{item.title}</p>
                <p>{item.context}</p>
                <p>{item.create_user}</p>
                <p>{item.create_date}</p>
              </S.infobox>
            </S.blogitem>
          ))}
        </S.items>
      </S.Positioner>
    </>
  );
};

export default StoryContents;
