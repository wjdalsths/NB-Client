import React from "react";
import * as S from "./style";
import SideLogin from "../SideLogin/SideLogin";
import SideMenu from "../SideMenu/SideMenu";
import User from "../User/User";
import isLogin from "../../Utils/Libs/isLogin";

const SideBar = () => {
  return (
    <>
      <S.Container>
        {isLogin() ? <User /> : <SideLogin />}
        {/* <SideLogin /> */}
        {/* <User /> */}
        <SideMenu />
      </S.Container>
    </>
  );
};

export default SideBar;
