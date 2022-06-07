import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";
const SignUpContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showHide, setShowHide] = useState("show");

  const onSignup = (e: any) => {
    e.preventDefault();
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(email)) {
      alert("이메일 형식이 틀렸습니다. 다시 확인해주세요");
    }
    if (password !== checkPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    } else {
      axios({
        method: "post",
        url: "/User/",
        data: {
          name: name,
          email: email,
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          console.log("성공");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  const togglePassword = (e: any) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    setShowHide(showPassword ? "show" : "hide");
  };
  return (
    <>
      <S.Positioner>
        <S.InputWrapper>
          <S.input
            placeholder="NAME"
            type="text"
            onChange={(e) => setName(e.target.value)}
            maxLength={16}
            onKeyPress={(e) => {
              if (e.key === "Enter") onSignup(e);
            }}
          />
          <S.input
            placeholder="EMAIL"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") onSignup(e);
            }}
          />
          <S.pwWrapper>
            <input
              placeholder="PASSWORD"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") onSignup(e);
              }}
            />
            <S.showPwBtn onClick={togglePassword}>{showHide}</S.showPwBtn>
          </S.pwWrapper>
          <S.pwWrapper>
            <input
              placeholder="PASSWORD CHECK"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setCheckPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") onSignup(e);
              }}
            />
            <S.showPwBtn onClick={togglePassword}>{showHide}</S.showPwBtn>
          </S.pwWrapper>
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.SignUpBtn onClick={onSignup}>Sign Up</S.SignUpBtn>
        </S.BtnWrapper>
      </S.Positioner>
    </>
  );
};

export default SignUpContent;
