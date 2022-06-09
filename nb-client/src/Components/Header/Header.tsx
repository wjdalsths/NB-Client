import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  const isLogin = () => !!localStorage.getItem("Blog_accessToken");

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
          <>
            {isLogin() ? (
              <>
                <Link
                  to="/freeWrite"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "black",
                  }}
                >
                  <S.WriteWrapper>
                    <img src="Icons/documentlist.png" alt="" />
                    <p>글쓰기</p>
                  </S.WriteWrapper>
                </Link>
                <Link
                  to="/"
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
          </>
        </S.Title>

        <S.Line />
      </S.Container>
    </>
  );
};

export default Header;
