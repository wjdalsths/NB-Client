import { customAxios } from "../Utils/Libs/customAxios";

export const contentStory = async () => {
  try {
    const { data } = await customAxios.get("/SBN/");
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getWatchStory = async (id: string | undefined) => {
  try {
    const { data } = await customAxios.get(`/SBN/${id}`);
    return { data };
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
