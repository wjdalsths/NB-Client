import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
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
const FreeItem: React.FC<BlogType> = ({
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
