import React, { useEffect, useState } from "react";
import * as S from "./style";
import { contentFree } from "../../Api/Free";
import FreeItem from "../Freeitem/FreeItem";
import getUserId from "../../Utils/Libs/getUserId";
import { contentStory } from "../../Api/Story";
import dateFillter from "../../Utils/Libs/dateFillter";
import { useNavigate } from "react-router-dom";
import { contentQuestion } from "../../Api/Question";

const MyContent = () => {
  const [type, setType] = useState("free");
  const [free, setFree] = useState([]);
  const [story, setStory] = useState([]);
  const [question, setQuestion] = useState([]);
  const navigate = useNavigate();

  const chgType = (prop: any) => {
    setType(prop);
  };

  useEffect(() => {
    contentFree()
      .then((res: any) => {
        console.log(res.data);
        setFree(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
    contentStory()
      .then((res: any) => {
        console.log(res.data);
        setStory(res.data);
      })
      .catch((e: any) => {
        console.log(e.message);
      });
    contentQuestion()
      .then((res: any) => {
        console.log(res.data);
        setQuestion(res.data);
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }, []);
  return (
    <>
      <S.Positioner>
        <S.ListType state={type}>
          <p onClick={() => chgType("free")}>자유</p>
          <p onClick={() => chgType("story")}>스토리</p>
          <p onClick={() => chgType("question")}>문의사항</p>
        </S.ListType>
        {type === "free" && (
          <S.freeItems>
            {free.map(
              (item: any) =>
                getUserId === item.create_user && (
                  <FreeItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    context={item.context}
                    img1={item.img1}
                    img2={item.img1}
                    img3={item.img2}
                    img4={item.img4}
                    img5={item.im5}
                    create_user={item.create_user}
                    create_date={item.create_daa}
                    correction_date={item.correction_data}
                  />
                )
            )}
          </S.freeItems>
        )}
        {type === "story" && (
          <S.SnQItems>
            {story.map(
              (item: any) =>
                getUserId === item.create_user && (
                  <S.blogitem
                    key={item.id}
                    onClick={() => navigate(`/story/${item.id}`)}
                  >
                    <S.infobox>
                      <p>{item.id}</p>
                      <p>{item.title}</p>
                      <p>{item.create_user}</p>
                      <p>{dateFillter(item.create_date)}</p>
                    </S.infobox>
                  </S.blogitem>
                )
            )}
          </S.SnQItems>
        )}
        {type === "question" && (
          <S.SnQItems>
            {question.map(
              (item: any) =>
                getUserId === item.create_user_id && (
                  <S.blogitem
                    key={item.id}
                    onClick={() => navigate(`/question/${item.id}`)}
                  >
                    <S.infobox>
                      <p>{item.id}</p>
                      <p>{item.title}</p>
                      <p>{item.create_user_id}</p>
                      <p>{dateFillter(item.create_date)}</p>
                    </S.infobox>
                  </S.blogitem>
                )
            )}
          </S.SnQItems>
        )}
      </S.Positioner>
    </>
  );
};

export default MyContent;
