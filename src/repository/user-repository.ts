import { UserCreateDTO } from "../dto/user-dto";
import prisma from "../lib/prisma-client";

export async function createUser(user: UserCreateDTO) {
    const savedUser = await prisma.user.create({
        data: {
            username: user.username,
            lastName: user.lastName,
            password: user.password,
            firstName: user.firstName,
            email: user.email
        }
    });
    return savedUser;
}

/**
 * Gets the user by a unique field (id | username | email). The first defined field will be used to perform the search.
 * @param id 
 * @param username 
 * @param email 
 */
export async function getOneUser(id?: string, username?: string, email?: string) {
    let user;
    if (id !== undefined) {
        user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
    }
    else if(username !== undefined) {
        user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
    }
    else if(email !== undefined) {
        user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }
    else {
        throw new Error("At least one of id, username or email must be provided");
    }
    return user;
}