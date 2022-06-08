import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";

const BlogContents = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
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
                src={""}
                alt=""
                style={{
                  height: "180px",
                  width: "250px",
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

export default BlogContents;
