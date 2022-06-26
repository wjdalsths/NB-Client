import { customAxios } from "../Utils/Libs/customAxios";

export const signin = async (email: string, password: string) => {
  try {
    const { data } = await customAxios.post("/login/", {
      email: email,
      password: password,
    });
    return { data };
  } catch (e: any) {}
};
