import { getUser } from "@/prisma/model/users";
import { NextResponse } from "next/server";
import handleResponse from "@/utils/api/response";

export const POST = async (req: Request) => {
  const request = await req.json();
  const user = await getUser({
    email: request.email,
  });
  if (user) {
    if (user.password === request.password) {
      const res = NextResponse.json(
        handleResponse(200, user, "Login successfully")
      );
      return res;
    } else {
      const res = NextResponse.json(
        handleResponse(401, {}, "Wrong password provided.")
      );
      return res;
    }
  } else {
    const res = NextResponse.json(handleResponse(404, {}));
    return res;
  }
};
