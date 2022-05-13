import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
const SideMenu = () => {
  return (
    <>
      <S.Positioner>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <S.Items>
            <S.Icons>
              <img src="Icons/freedom.png" alt="" />
            </S.Icons>
            <span>자유</span>
          </S.Items>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <S.Items>
            <S.Icons>
              <img src="Icons/book.png" alt="" />
            </S.Icons>
            <span>스토리</span>
          </S.Items>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <S.Items>
            <S.Icons>
              <img src="Icons/document.png" alt="" />
            </S.Icons>
            <span>문의사항</span>
          </S.Items>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <S.Items>
            <S.Icons>
              <img src="Icons/notice.png" alt="" />
            </S.Icons>
            <span>공지사항</span>
          </S.Items>
        </Link>
      </S.Positioner>
    </>
  );
};

export default SideMenu;
