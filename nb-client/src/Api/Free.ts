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
    console.log(data);
    console.log(1234);

    return { data };
  } catch (e: any) {
    console.log(e.massage);
  }
};
