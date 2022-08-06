import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NoticeWatch from "../../Components/NoticeWatch/NoticeWatch";
import SideBar from "../../Components/SideBar/SideBar";
import { getWatchNotice } from "../../Api/Notice";
import { NoticeType } from "../../types";

const NoticeWatchPage: React.FC = () => {
  const param = useParams();
  const [noticeWatch, setNoticeWatch] = useState<NoticeType>();
  const page = "notice";

  useEffect(() => {
    async function ReturnWatchNotice() {
      getWatchNotice(param.id).then((res) => {
        setNoticeWatch(res?.data);
      });
    }
    ReturnWatchNotice();
  }, []);

  return (
    <>
      <S.Wrapper>
        <Header page={page} />
        <S.Container>
          {noticeWatch ? (
            <NoticeWatch noticeWatch={noticeWatch} />
          ) : (
            <div>로딩중</div>
          )}
          <SideBar />
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default NoticeWatchPage;
