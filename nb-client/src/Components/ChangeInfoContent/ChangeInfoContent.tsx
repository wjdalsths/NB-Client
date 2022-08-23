import React, { useEffect, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { getUser, userInfoChange } from "../../Api/user";
import getUserId from "../../Utils/Libs/getUserId";

const ChangeInfoContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showHide, setShowHide] = useState("show");
  const onLogout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");
    localStorage.removeItem("id");

    toast.info("로그아웃 되었어요");
    window.location.replace("/");
  };

  const onRevise = (e: any) => {
    e.preventDefault();
    let pattern = /^\s\s*$/;
    if (name.match(pattern) || name === "") {
      toast.error("이름을 입력해주세요.");
    } else if (email.match(pattern) || email === "") {
      toast.error("email를 입력해주세요.");
    } else if (checkPassword.match(pattern) || checkPassword === "") {
      toast.error("비밀번호 확인을 입력해주세요.");
    } else if (email !== checkEmail) {
      toast.error("email이 다릅니다.");
    } else if (password !== checkPassword) {
      toast.error("비밀번호가 다릅니다.");
    } else {
      userInfoChange(getUserId, name, email, password)
        .then((res: any) => {
          console.log(res);
          toast.success("수정 완료되었습니다.");
          onLogout();
        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    getUser(getUserId).then((res: any) => {
      // console.log(res.data.email);
      setCheckEmail(res.data.email);
    });
  }, []);

  return (
    <>
      <S.Positioner>
        <S.InputWrapper>
          <S.input
            placeholder="현재 이름"
            type="text"
            onChange={(e) => setName(e.target.value)}
            maxLength={16}
            onKeyPress={(e) => {
              if (e.key === "Enter") onRevise(e);
            }}
          />
          <S.input
            placeholder="현재 이메일"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") onRevise(e);
            }}
          />
          <S.pwWrapper>
            <input
              placeholder="변경할 비밀번호"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") onRevise(e);
              }}
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
