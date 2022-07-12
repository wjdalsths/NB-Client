import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import isLogin from "../../Utils/Libs/isLogin";

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
                    <img src="Icons/documentlist.png" alt="" />
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
                    <img src="Icons/writing.png" alt="" />
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
