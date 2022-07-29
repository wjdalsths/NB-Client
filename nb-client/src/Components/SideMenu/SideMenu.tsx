import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import * as SVG from "../../SVG";
import isLogin from "../../Utils/Libs/isLogin";

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Positioner>
        <S.Items onClick={() => navigate(`/free`)}>
          <S.Icons>
            <SVG.Free />
          </S.Icons>
          <span>자유</span>
        </S.Items>
        <S.Items
          onClick={() => (isLogin() ? navigate(`/story`) : navigate("/"))}
        >
          <S.Icons>
            <SVG.Book />
          </S.Icons>
          <span>스토리</span>
        </S.Items>
        <S.Items
          onClick={() => (isLogin() ? navigate(`/question`) : navigate("/"))}
        >
          <S.Icons>
            <SVG.Document />
          </S.Icons>
          <span>문의사항</span>
        </S.Items>
        <S.Items
          onClick={() => (isLogin() ? navigate(`/notice`) : navigate("/"))}
        >
          <S.Icons>
            <SVG.Notice />
          </S.Icons>
          <span>공지사항</span>
        </S.Items>
      </S.Positioner>
    </>
  );
};

export default SideMenu;
