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

export const getUser = async (id: string | null) => {
  try {
    const { data } = await customAxios.get(`/User/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};
