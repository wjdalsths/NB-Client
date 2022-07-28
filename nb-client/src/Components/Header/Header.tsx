import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import isLogin from "../../Utils/Libs/isLogin";
import * as SVG from "../../SVG";
const Header = () => {
  return (
    <>
      <S.Container>
        <S.Title>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
            }}
          >
            <S.Logo>NB</S.Logo>
          </Link>
          <S.DocumentList>
            {isLogin() ? (
              <>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "black",
                  }}
                >
                  <S.WriteWrapper>
                    <SVG.Documentlist />
                    <p>글목록</p>
                  </S.WriteWrapper>
                </Link>
                <Link
                  to="/freeWrite"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "black",
                  }}
                >
                  <S.WriteWrapper>
                    <SVG.Write />
                    <p>글쓰기</p>
                  </S.WriteWrapper>
                </Link>
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
