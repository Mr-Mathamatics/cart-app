import { User } from "@/type/typeUser";
import request from "@/utils/pages/request";

export const login = async (body: User) => {
  const result = await request.post("/login", body);
  return result.data;
};
