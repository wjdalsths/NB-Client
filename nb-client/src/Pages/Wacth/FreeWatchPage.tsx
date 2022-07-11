import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import FreeWatch from "../../Components/FreeWatch/FreeWatch";
import SideBar from "../../Components/SideBar/SideBar";
import { customAxios } from "../../Utils/Libs/customAxios";
import { FreeType } from "../../types";

const FreeWatchPage: React.FC = () => {
  const param = useParams();
  const [freeWatch, setFreeWatch] = useState<FreeType>();

  useEffect(() => {
    async function getFreeWatch() {
      try {
        const res = await customAxios.get(`/FBN/${param.id}`);
        console.log(res.data);
        setFreeWatch(res.data);
      } catch (e: any) {
        const { data } = e.response;
        console.error("data : ", data);
      }
    }
    getFreeWatch();
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
