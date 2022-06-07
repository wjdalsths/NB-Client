import React, { useState } from "react";
import * as S from "./style";
import { customAxios } from "../../Utils/Libs/customAxios";
import { toast } from "react-toastify";

const ChangeInfoContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showHide, setShowHide] = useState("show");

  const onRevise = (e: any) => {
    e.preventDefault();
    let pattern = /^\s\s*$/;
    if (name.match(pattern) || name === "") {
      toast.error("이름을 입력해주세요.");
    } else if (email.match(pattern) || email === "") {
      toast.error("email를 입력해주세요.");
    } else if (checkPassword.match(pattern) || checkPassword === "") {
      toast.error("비밀번호 확인을 입력해주세요.");
    } else if (password !== checkPassword) {
      toast.error("비밀번호가 다릅니다.");
    } else {
      customAxios({
        method: "post",
        url: "/User/id",
        data: {
          name: name,
          email: email,
          password: password,
        },
      })
        .then((res) => {
          console.log(res);
          console.log("성공");
          toast.success("수정 완료되었습니다.");
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
            placeholder="수정할 이름"
            type="text"
            onChange={(e) => setName(e.target.value)}
            maxLength={16}
          />
          <S.input
            placeholder="현재 이메일"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.pwWrapper>
            <input
              placeholder="변경할 비밀번호"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.showPwBtn></S.showPwBtn>
          </S.pwWrapper>
          <S.pwWrapper>
            <input
              placeholder="비밀번호 확인"
              type="password"
              onChange={(e) => setCheckPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") onRevise(e);
              }}
            />
            <S.showPwBtn></S.showPwBtn>
          </S.pwWrapper>
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.SignUpBtn onClick={onRevise}>수정하기</S.SignUpBtn>
        </S.BtnWrapper>
      </S.Positioner>
    </>
  );
};

export default ChangeInfoContent;
