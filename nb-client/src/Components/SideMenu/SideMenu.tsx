import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Positioner>
        <S.Items onClick={() => navigate(`/free`)}>
          <S.Icons>
            <img src="Icons/freedom.png" alt="" />
          </S.Icons>
          <span>자유</span>
        </S.Items>
        <S.Items onClick={() => navigate(`/story`)}>
          <S.Icons>
            <img src="Icons/book.png" alt="" />
          </S.Icons>
          <span>스토리</span>
        </S.Items>
        <S.Items onClick={() => navigate(`/question`)}>
          <S.Icons>
            <img src="Icons/document.png" alt="" />
          </S.Icons>
          <span>문의사항</span>
        </S.Items>
        <S.Items onClick={() => navigate(`/notice`)}>
          <S.Icons>
            <img src="Icons/notice.png" alt="" />
          </S.Icons>
          <span>공지사항</span>
        </S.Items>
      </S.Positioner>
    </>
  );
};

export default SideMenu;
