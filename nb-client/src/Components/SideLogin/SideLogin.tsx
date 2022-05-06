import React, { useState } from "react";
import * as S from "./style";
import SignUpModal from "../SignUpModal/SignUpModal";
const SideLogin = () => {
  const [modal, setmodal] = useState(false);
  const closeModal = () => {
    setmodal(false);
  };
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
          <S.Button onClick={() => setmodal(!modal)}>회원가입</S.Button>
          {modal && <SignUpModal open={modal} close={closeModal} />}
        </S.ButtonWrapper>
      </S.Positioner>
    </>
  );
};

export default SideLogin;
