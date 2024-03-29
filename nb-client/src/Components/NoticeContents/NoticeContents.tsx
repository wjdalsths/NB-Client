import React, { useState, useEffect } from "react";
import * as S from "./style";
import { contentNotice } from "../../Api/Notice";
import { useNavigate } from "react-router-dom";
import dateFillter from "../../Utils/Libs/dateFillter";

const NoticeContents = () => {
  const [notice, setNotice] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    contentNotice()
      .then((res: any) => {
        console.log(res.data);
        setNotice(res.data);
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
          {notice.length !== 0 ? (
            notice.map((item: any) => (
              <S.blogitem
                key={item.id}
                onClick={() => navigate(`/notice/${item.id}`)}
              >
                <S.infobox>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.create_user_id}</p>
                  <p>{dateFillter(item.create_date)}</p>
                </S.infobox>
              </S.blogitem>
            ))
          ) : (
            <span>게시물이 없습니다.</span>
          )}
        </S.items>
      </S.Positioner>
    </>
  );
};

export default NoticeContents;
