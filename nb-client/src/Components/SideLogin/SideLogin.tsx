import React from "react";
import * as S from "./style";
const SideLogin = () => {
  return (
    <>
      <S.Positioner>
        <S.InputWrapper>
          <S.Input
            placeholder="EMAIL"
            type="text"
            //   onChange={({ target: { value } }) => setId(value)}
            //   onKeyPress={(e) => {
            //     if (e.key === "Enter") onSignin("");
            //   }}
            //   maxLength={6}
          />
          <S.Input
            placeholder="PASSWORD"
            type="password"
            //   displayed={false}
            //   onChange={({ target: { value } }) => setPassword(value)}
            //   onKeyPress={(e) => {
            //     if (e.key === "Enter") onSignin("");
            //   }}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.Button>로그인</S.Button>
          <S.Button>회원가입</S.Button>
        </S.ButtonWrapper>
      </S.Positioner>
    </>
  );
};

export default SideLogin;
