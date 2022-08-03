import React, { useState, useEffect } from "react";
import * as S from "./style";
import { contentFree } from "../../Api/Free";
import FreeItem from "../Freeitem/FreeItem";

const FreeContents = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    contentFree()
      .then((res: any) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <S.items>
        {blog.map((item: any) => (
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
        ))}
      </S.items>
    </>
  );
};

export default FreeContents;
