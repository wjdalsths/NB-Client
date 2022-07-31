import { customAxios } from "../Utils/Libs/customAxios";

export const contentFree = async () => {
  try {
    const { data } = await customAxios.get("/FBN/");
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const writeFree = async (
  title: string,
  content: string,
  imgBase64: string,
  id: number
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
        create_user: id,
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
    console.log(e.message);
  }
};

export const changeFree = async (
  id: number | undefined,
  userId: number,
  title: string,
  content: string,
  imgBase64: string
) => {
  try {
    const { data } = await customAxios.put(
      `/FBN/${id}`,
      {
        title: title,
        context: content,
        img1: imgBase64,
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        create_user: userId,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const deleteFree = async (id: number) => {
  try {
    const { data } = await customAxios.delete(`/FBN/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getCommentFree = async (id: number) => {
  try {
    const { data } = await customAxios.get(`/CFR/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
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
    console.log(e.message);
  }
};

export const changeCommentFree = async (
  id: number,
  comment: string,
  userId: number | null,
  contentId: number
) => {
  try {
    const { data } = await customAxios.put(`/CFR/DE/${id}`, {
      context: comment,
      create_id_user_fr: userId,
      comment_NB: contentId,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const deleteCommentFree = async (id: number) => {
  try {
    const { data } = await customAxios.delete(`/CFR/DE/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getLike = async (id: number) => {
  try {
    const { data } = await customAxios.get(`/suggest_fr/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const upLike = async (userId: number, id: number) => {
  try {
    const { data } = await customAxios.post(`/suggest_fr/`, {
      user: userId,
      board: id,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};
