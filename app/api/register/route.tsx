import handleResponse from "@/utils/api/response";
import { createUser, getUser } from "@/prisma/model/users";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const request = await req.json();
  const user = await getUser({ email: request.email });
  if (!user) {
    const created = await createUser(request);
    return NextResponse.json(handleResponse(201, created));
  } else {
    return NextResponse.json(handleResponse(409, {}, "User already exists."));
  }
};
