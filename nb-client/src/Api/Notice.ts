import { customAxios } from "../Utils/Libs/customAxios";

export const contentNotice = async () => {
  try {
    const { data } = await customAxios.get("/Noti/");
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getWatchNotice = async (id: string | undefined) => {
  try {
    const { data } = await customAxios.get(`/Noti/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};
