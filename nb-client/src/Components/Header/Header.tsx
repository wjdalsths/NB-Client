import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import isLogin from "../../Utils/Libs/isLogin";
import * as SVG from "../../SVG";
import { toast } from "react-toastify";

const Header = (page: any) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.Title>
          <S.Logo onClick={() => navigate("/")}>NB</S.Logo>
          <S.DocumentList>
            {isLogin() ? (
              <>
                <S.WriteWrapper onClick={() => navigate("/mycontent")}>
                  <SVG.Documentlist />
                  <p>글목록</p>
                </S.WriteWrapper>
                <S.WriteWrapper
                  onClick={() => {
                    page.page === "notice"
                      ? toast.warn("글을 쓸 수 없습니다.")
                      : navigate(`/${page.page}Write`);
                  }}
                >
                  <SVG.Write />
                  <p>글쓰기</p>
                </S.WriteWrapper>
              </>
            ) : (
              ""
            )}
          </S.DocumentList>
        </S.Title>
        <S.Line />
      </S.Container>
    </>
  );
};

export default Header;
