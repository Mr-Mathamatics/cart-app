import { getUser } from "@/prisma/model/login"
import { Login } from "@/prisma/model/login/typeLogin"

export const POST = async (req:Login) => {
    const user = await getUser(req)
    console.log(user,req)
}