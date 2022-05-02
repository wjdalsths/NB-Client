import React from "react";
import * as S from "./style";
import SideLogin from "../SideLogin/SideLogin";
import SideMenu from "../SideMenu/SideMenu";
const SideBar = () => {
  return (
    <>
      <S.Container>
        <SideLogin />
        <SideMenu />
      </S.Container>
    </>
  );
};

export default SideBar;
