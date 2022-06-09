import React, { useState, useEffect } from "react";
import * as S from "./style";
import { customAxios } from "../../Utils/Libs/customAxios";

const NoticeContents = () => {
  const [stroy, setStory] = useState([]);

  //   compoentDidMount(){}

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    customAxios
      .get(url)
      .then((res: any) => {
        console.log(res);
        setStory(res.data);
      })
      .catch((error: any) => {
        console.log(error);
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
          {stroy.map((user: any) => (
            <S.blogitem key={user.id}>
              <S.infobox>
                {/* {user.id} */}
                <p>1234</p>
                {/* <S.title>{user.title}</S.title> */}
                <p>titletitletitletitletitlttitletitleteitleteitlt</p>
                {/* {user.username} */}
                <p>username</p>
                {/* {user.date} */}
                <p>2022/12/12</p>
              </S.infobox>
            </S.blogitem>
          ))}
        </S.items>
      </S.Positioner>
    </>
  );
};

export default NoticeContents;
