import { customAxios } from "../Utils/Libs/customAxios";

export const contentStory = async () => {
  try {
    const { data } = await customAxios.get("/SBN/");
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const writeStory = async (
  title: string,
  content: string,
  id: number
) => {
  try {
    const { data } = await customAxios.post(
      "/SBN/CRE/",
      {
        title: title,
        context: content,
        create_user: id,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return { data };
  } catch (e: any) {}
};

export const getWatchStory = async (id: string | undefined) => {
  try {
    const { data } = await customAxios.get(`/SBN/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getCommentStory = async (id: number) => {
  try {
    const { data } = await customAxios.get(`/CST/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const writeCommentStory = async (
  comment: string,
  userId: number | null,
  contentId: number
) => {
  try {
    const { data } = await customAxios.post(`/CST/`, {
      context: comment,
      create_id_user_st: userId,
      comment_Story: contentId,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const changeCommentStory = async (
  id: number,
  comment: string,
  userId: number | null,
  contentId: number
) => {
  try {
    const { data } = await customAxios.put(`/CST/DE/${id}`, {
      context: comment,
      create_id_user_st: userId,
      comment_Story: contentId,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const deleteCommentStory = async (id: number) => {
  try {
    await customAxios.delete(`/CST/DE/${id}`);
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getLikeStory = async (id: number) => {
  try {
    const { data } = await customAxios.get(`/suggest_st/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const upLikeStory = async (userId: number, id: number) => {
  try {
    const { data } = await customAxios.post(`/suggest_st/`, {
      user: userId,
      board: id,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};
