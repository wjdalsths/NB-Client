import React from "react";
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
interface BlogTypeProp {
  freeWatch: BlogType;
}
const FreeWatch = ({ freeWatch }: BlogTypeProp) => {
  return <>{freeWatch.title}</>;
};

export default FreeWatch;
