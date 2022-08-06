import React from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import MyContent from "../../Components/MyContent/MyContent";

const MyContentPage = () => {
  const page = "free";

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          <MyContent />
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default MyContentPage;
