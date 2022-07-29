import React, { useState } from "react";
import * as S from "./style";
import * as SVG from "../../SVG";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangeInfoModal from "../ChangeInfoModal/ChangeInfoModal";
import { useRecoilValue } from "recoil";
import { userList } from "../../atoms";

const User = () => {
  const name = "wjdaasdfffffffffffls";
  const [modal, setmodal] = useState(false);
  const list = useRecoilValue(userList);
  const id = localStorage.getItem("id");

  console.log(list);

  const closeModal = () => {
    setmodal(false);
  };

  const onLogout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");
    localStorage.removeItem("id");

    toast.info("로그아웃 되었어요");
    window.location.replace("/");
  };
  return (
    <>
      <S.Positioner>
        <S.ProfileWrapper>
          <S.ProfileImg>
            <SVG.User />
          </S.ProfileImg>
          <S.UserContents>
            {id}
            <br />
            {name}
          </S.UserContents>
        </S.ProfileWrapper>
        <S.ButtonWrapper>
          <S.Btn onClick={onLogout}>로그아웃</S.Btn>
          <S.Btn onClick={() => setmodal(!modal)}>정보수정</S.Btn>
          {modal && <ChangeInfoModal open={modal} close={closeModal} />}
        </S.ButtonWrapper>
      </S.Positioner>
    </>
  );
};

export default User;
