import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

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
        </S.Title>
        <S.Line />
      </S.Container>
    </>
  );
};

export default Header;
