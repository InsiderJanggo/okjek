import prisma from "../prisma";

export const getOneUser = async(id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            accounts: true
        }
    })
    await prisma.$disconnect()
    return user;
}