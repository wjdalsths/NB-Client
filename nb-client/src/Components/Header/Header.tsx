import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import isLogin from "../../Utils/Libs/isLogin";
import * as SVG from "../../SVG";
const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.Title>
          <S.Logo onClick={() => navigate("/")}>NB</S.Logo>
          <S.DocumentList>
            {isLogin() ? (
              <>
                <S.WriteWrapper onClick={() => navigate("/")}>
                  <SVG.Documentlist />
                  <p>글목록</p>
                </S.WriteWrapper>
                <S.WriteWrapper onClick={() => navigate("/")}>
                  <SVG.Write />
                  <p>글쓰기</p>
                </S.WriteWrapper>
              </>
            ) : (
              ""
            )}
          </S.DocumentList>
        </S.Title>
        <S.Line />
      </S.Container>
    </>
  );
};

export default Header;
