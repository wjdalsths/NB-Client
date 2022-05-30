import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [blog, setBlog] = useState([]);
  const name = "wjdaasdfffffffffffls";
  const id = "1234";

  useEffect(() => {
    const url = "";
    axios
      .get(url)
      .then((res: any) => {
        console.log(res);
        setBlog(res.data);
      })
      .catch((error: any) => {
        console.log("error");
      });
  }, []);

  const onLogout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");

    toast.info("로그아웃 되었어요");
    window.location.replace("/");
  };

  return (
    <>
      <S.Positioner>
        <S.ProfileWrapper>
          <S.ProfileImg>
            <img src="Icons/user.png" alt="" />
          </S.ProfileImg>
          <S.UserContents>
            {id}
            <br />
            {name}
          </S.UserContents>
        </S.ProfileWrapper>
        <S.ButtonWrapper>
          <S.Btn>정보수정</S.Btn>
          <S.Btn onClick={onLogout}>로그아웃</S.Btn>
        </S.ButtonWrapper>
      </S.Positioner>
    </>
  );
};

export default User;
