import React from "react";
import * as S from "./style";
const SignUpContent = () => {
  return (
    <>
      <S.Positioner>
        <S.InputWrapper>
          <S.input placeholder="name" type="text" />
          <S.input placeholder="EMAIL" type="email" />
          <S.input placeholder="PASSWORD" type="password" />
          <S.input placeholder="PASSWORD CHECK" type="password" />
        </S.InputWrapper>
      </S.Positioner>
    </>
  );
};

export default SignUpContent;
