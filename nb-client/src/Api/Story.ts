import { customAxios } from "../Utils/Libs/customAxios";

export const contentStory = async () => {
  try {
    const { data } = await customAxios.get("/SBN/");
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};
