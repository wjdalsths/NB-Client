import React from "react";
import * as S from "./style";
import SideLogin from "../SideLogin/SideLogin";
import SideMenu from "../SideMenu/SideMenu";
import User from "../User/User";

const SideBar = () => {
  const isLogin1 = () => !!localStorage.getItem("Blog_accessToken");

  return (
    <>
      <S.Container>
        {isLogin1() ? <User /> : <SideLogin />}
        {/* <SideLogin /> */}
        {/* <User /> */}
        <SideMenu />
      </S.Container>
    </>
  );
};

export default SideBar;
