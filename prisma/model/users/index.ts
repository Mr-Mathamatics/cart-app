import prisma from '@/prisma/prisma'
import { User } from './typeUser'

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUser = async (id:string) => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

// CREATE
export const createUser = async ({ email, name, password }: User) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password
    }
  })
  return user
}

// UPDATE
export const updateUser = async ({id, ...updateData}:User) => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return user
}

// DELETE
export const deleteUser = async (id:string) => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })
  return user
}