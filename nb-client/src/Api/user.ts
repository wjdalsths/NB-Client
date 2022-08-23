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

export const signup = async (name: string, email: string, password: string) => {
  try {
    const { data } = await customAxios.post("/User/", {
      name: name,
      email: email,
      password: password,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getUser = async (id: number) => {
  try {
    const { data } = await customAxios.get(`/User/${id}`);
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};

export const userInfoChange = async (
  id: number,
  name: string,
  email: string,
  password: string
) => {
  try {
    const { data } = await customAxios.put(`/User/${id}`, {
      name: name,
      email: email,
      passwored: password,
    });
    return { data };
  } catch (e: any) {
    console.log(e.message);
  }
};
