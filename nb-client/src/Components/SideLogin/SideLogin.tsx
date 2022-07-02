import React, { useState } from "react";
import * as S from "./style";
import SignUpModal from "../SignUpModal/SignUpModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userList } from "../../atoms";
import { signin } from "../../Api/user";
import { useNavigate } from "react-router-dom";

const Signin = async (email: string, password: string) => {
  return await signin(email, password);
};
const SideLogin = () => {
  const [modal, setmodal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setList = useSetRecoilState(userList);
  const navigate = useNavigate();

  const closeModal = () => {
    setmodal(false);
  };
  const onLogin = async () => {
    console.log(email, password);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(email)) {
      return toast.error("이메일 형식이 틀렸습니다. 다시 확인해주세요");
    }
    Signin(email, password)
      .then((res) => {
        localStorage.setItem("Blog_accessToken", res?.data.accessToken);
        localStorage.setItem("Blog_refreshToken", res?.data.refreshToken);
        setList({
          id: res?.data.id,
          name: res?.data.name,
          email: res?.data.email,
          password: res?.data.password,
        });

        console.log("sucees");
        toast.success("로그인 성공");
        console.log(res?.data.id);
        navigate("home");
      })
      .catch((e) => {
        const { data } = e.response;
        console.error("data : ", data);
        console.error(data.message);
        toast.error("다시 로그인 해주세요");
      });
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
                onLogin();
              }
            }}
          />
          <S.Input
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onLogin();
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
