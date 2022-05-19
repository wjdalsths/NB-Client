import React, { useState } from "react";
import * as S from "./style";
import SignUpModal from "../SignUpModal/SignUpModal";
import axios from "axios";
import { toast } from "react-toastify";

const SideLogin = () => {
  const [modal, setmodal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setmodal(false);
  };
  const onLogin = async (e: any) => {
    console.log(email, password);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(email)) {
      alert("이메일 형식이 틀렸습니다. 다시 확인해주세요");
    } else {
      const { data } = await axios.post("/login/", {
        email: email,
        password: password,
      });

      console.log(data);
      localStorage.setItem("Blog_accessToken", data.accessToken);
      localStorage.setItem("Blog_refreshToken", data.refreshToken);
      console.log("sucees");

      toast.success("로그인 성공");
    }
  };

  return (
    <>
      <S.Positioner>
        <S.InputWrapper>
          <S.Input
            placeholder="EMAIL"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onLogin(e);
              }
            }}
          />
          <S.Input
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onLogin(e);
              }
            }}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.Btn onClick={onLogin}>로그인</S.Btn>
          <S.Btn onClick={() => setmodal(!modal)}>회원가입</S.Btn>
          {modal && <SignUpModal open={modal} close={closeModal} />}
        </S.ButtonWrapper>
      </S.Positioner>
    </>
  );
};

export default SideLogin;
