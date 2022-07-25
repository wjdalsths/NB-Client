import { customAxios } from "../Utils/Libs/customAxios";

export const contentFree = async () => {
  try {
    const { data } = await customAxios.get("/FBN/");
    return { data };
  } catch (e: any) {}
};

export const writeFree = async (
  title: string,
  content: string,
  imgBase64: string
) => {
  try {
    const { data } = await customAxios.post(
      "/FBN/CRE/",
      {
        title: title,
        context: content,
        img1: imgBase64,
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        create_user: 1,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return { data };
  } catch (e: any) {}
};

export const getWatchFree = async (id: string | undefined) => {
  try {
    const { data } = await customAxios.get(`/FBN/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.massage);
  }
};

export const getCommentFree = async (id: number) => {
  try {
    const { data } = await customAxios.get(`/CFR/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.masaage);
  }
};

export const writeCommentFree = async (
  comment: string,
  userId: number | null,
  contentId: number
) => {
  try {
    const { data } = await customAxios.post(`/CFR/`, {
      context: comment,
      create_id_user_fr: userId,
      comment_NB: contentId,
    });
    return { data };
  } catch (e: any) {
    console.log(e.masaage);
  }
};
