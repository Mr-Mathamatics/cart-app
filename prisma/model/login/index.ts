import prisma from '@/prisma/prisma'
import { Login } from './typeLogin'

export const getUser = async ({ email, password }: Login) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })
  return user
}