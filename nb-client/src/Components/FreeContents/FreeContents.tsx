import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ContentFree } from "../../Api/Free";

const FreeContents = () => {
  const [blog, setBlog] = useState([]);

  //   compoentDidMount(){}

  useEffect(() => {
    // const url = "https://jsonplaceholder.typicode.com/posts";
    ContentFree()
      .then((res: any) => {
        console.log(res);
        setBlog(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <S.items>
        {blog.map((user: any) => (
          <S.blogitem key={user.id}>
            <S.imgbox>
              <img
                src={"data:image/png;base64," + user.img1}
                alt="img"
                style={{
                  width: "100%",
                  height: "180px",
                }}
              />
            </S.imgbox>
            <S.infobox>
              <S.title>{user.title}</S.title>
              {/* <S.info>{user.body}</S.info> */}
            </S.infobox>
          </S.blogitem>
        ))}
      </S.items>
    </>
  );
};

export default FreeContents;
