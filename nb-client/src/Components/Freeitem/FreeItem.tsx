import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { FreeType } from "../../types";
const FreeItem: React.FC<FreeType> = ({
  id,
  title,
  context,
  img1,
  img2,
  img3,
  img4,
  img5,
  create_user,
  create_date,
  correction_date,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <S.blogitem onClick={() => navigate(`/free/${id}`)}>
        <S.imgbox>
          <img src={"data:image/png;base64," + img1} />
        </S.imgbox>
        <S.infobox>
          <S.title>{title}</S.title>
        </S.infobox>
      </S.blogitem>
    </>
  );
};

export default FreeItem;
