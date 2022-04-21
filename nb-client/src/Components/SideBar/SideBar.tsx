import React from "react";
import * as S from "./style";
import SideLogin from "../SideLogin/SideLogin";
import SideMenu from "../SideMenu/SideMenu";
const SideBar = () => {
  return (
    <>
      <S.Container>
        <S.LoginWrapper>
          <SideLogin></SideLogin>
        </S.LoginWrapper>
        <S.SideMenu>
          <SideMenu></SideMenu>
        </S.SideMenu>
      </S.Container>
    </>
  );
};

export default SideBar;
