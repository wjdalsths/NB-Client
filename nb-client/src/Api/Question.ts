import { customAxios } from "../Utils/Libs/customAxios";

export const contentQuestion = async () => {
  try {
    const { data } = await customAxios.get("/Inq/");
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const writeQuestion = async (
  title: string,
  content: string,
  id: number
) => {
  try {
    const { data } = await customAxios.post(
      "/Inq/CRE/",
      {
        title: title,
        context: content,
        create_user_id: id,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return { data };
  } catch (e: any) {}
};

export const getWatchQuestion = async (id: string | undefined) => {
  try {
    const { data } = await customAxios.get(`/Inq/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const changeQuestion = async (
  id: number | undefined,
  userId: number,
  title: string,
  content: string
) => {
  try {
    const { data } = await customAxios.put(
      `/Inq/${id}`,
      {
        title: title,
        context: content,
        create_user_id: userId,
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

export const deleteQuestion = async (id: number) => {
  try {
    await customAxios.delete(`/Inq/${id}`);
  } catch (e: any) {
    console.log(e.message);
  }
};
