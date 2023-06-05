import { getAllUsers } from "@/prisma/model/users"

export const GET  = async () => {
    const data = await getAllUsers()
    console.log(data)
    return new Response(data)
}