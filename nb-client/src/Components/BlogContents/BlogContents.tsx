import React, { useState, useEffect } from "react";
// import axios from "axios";
import * as S from "./style";
import { customAxios } from "../../Utils/Libs/customAxios";

const BlogContents = () => {
  const [blog, setBlog] = useState([]);
  const [imgBase64, setimgBase64] = useState("");

  useEffect(() => {
    // const url = "https://jsonplaceholder.typicode.com/posts";
    customAxios
      .get("/FBN/")
      .then((res: any) => {
        console.log(res);
        setBlog(res.data);
      })
      .catch((error: any) => {
        console.log("error");
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
              <S.info>{user.context}</S.info>
            </S.infobox>
          </S.blogitem>
        ))}
      </S.items>
    </>
  );
};

export default BlogContents;
