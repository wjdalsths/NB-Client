import React, { useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import FreeWrite from "../../Components/FreeWrite/FreeWrite";
import { useParams } from "react-router-dom";
import { FreeType } from "../../types";
import { getWatchFree } from "../../Api/Free";

const FreeWritePage = () => {
  const param = useParams();
  const [freeWatch, setFreeWatch] = useState<FreeType>();
  useEffect(() => {
    async function ReturnWatchFree() {
      getWatchFree(param.id).then((res) => {
        setFreeWatch(res?.data);
      });
    }
    ReturnWatchFree();
  }, []);

  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          {freeWatch ? (
            <FreeWrite freeWatch={freeWatch} />
          ) : (
            <FreeWrite freeWatch={null} />
          )}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default FreeWritePage;
