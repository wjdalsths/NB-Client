import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import FreeWatch from "../../Components/FreeWatch/FreeWatch";
import { customAxios } from "../../Utils/Libs/customAxios";
interface BlogType {
  id: number;
  title: string;
  context: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  create_user: number;
  create_date: string;
  correction_date: string;
}

const FreeWatchPage: React.FC = () => {
  const param = useParams();
  const [freeWatch, setFreeWatch] = useState<BlogType>();

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
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default FreeWatchPage;
