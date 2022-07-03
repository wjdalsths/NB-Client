import { atom } from "recoil";

type User = {
  // id: number;
  name: string;
  email: string;
  password: string;
};

export const userList = atom<User>({
  key: "userList",
  default: {
    // id: 1,
    name: "",
    email: "",
    password: "",
  },
});
