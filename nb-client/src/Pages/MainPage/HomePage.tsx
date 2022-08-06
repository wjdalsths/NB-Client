import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import FreeContents from "../../Components/FreeContents/FreeContents";

const HomePage = () => {
  const page = "free";

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          <FreeContents />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default HomePage;
