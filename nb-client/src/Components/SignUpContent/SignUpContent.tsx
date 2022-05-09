import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";
const SignUpContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const onSignup = (e: any) => {
    e.preventDefault();
    if (password !== checkPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    } else {
      axios({
        method: "post",
        url: "",
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
  return (
    <>
      <S.Positioner>
        <S.InputWrapper>
          <S.input
            placeholder="NAME"
            type="text"
            onChange={(e) => setName(e.target.value)}
            maxLength={16}
          />
          <S.input
            placeholder="EMAIL"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.input
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.input
            placeholder="PASSWORD CHECK"
            type="password"
            onChange={(e) => setCheckPassword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                onSignup;
              }
            }}
          />
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.SignUpBtn onClick={onSignup}>Sign Up</S.SignUpBtn>
        </S.BtnWrapper>
      </S.Positioner>
    </>
  );
};

export default SignUpContent;
