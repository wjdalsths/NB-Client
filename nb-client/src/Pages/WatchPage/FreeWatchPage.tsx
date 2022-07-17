import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import FreeWatch from "../../Components/FreeWatch/FreeWatch";
import SideBar from "../../Components/SideBar/SideBar";
import { FreeType } from "../../types";
import { getWatchFree } from "../../Api/Free";

const FreeWatchPage: React.FC = () => {
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
          {freeWatch ? <FreeWatch freeWatch={freeWatch} /> : <div>로딩중</div>}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default FreeWatchPage;
