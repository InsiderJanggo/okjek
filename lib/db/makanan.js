import prisma from "../prisma";

export const addMakanan = async(tokoId, name, price, image, popular) => {
    if(!popular) popular = false;

    const makanan = await prisma.makanan.create({
        data: {
            name,
            price,
            image,
            tokoId,
            popular
        }
    })
    await prisma.$disconnect()
    return makanan
}

export const getRandMakanan = async(number) => {
    
}

export const getAllMakanan = async() => {
    const makanan = await prisma.makanan.findMany({
        include: {
            toko: true
        }
    })
    await prisma.$disconnect()
    return makanan;
}

export const getOneMakanan = async(id) => {
    const makanan = await prisma.makanan.findUnique({
        where: {
            id
        },
        include: {
            toko: true
        }
    })
    await prisma.$disconnect()
    return makanan;
}

export const updateMakanan = async(id, name, price, image, popular) => {
    const makanan = await prisma.makanan.update({
        where: {
            id
        },
        data: {
            name,
            image,
            popular,
            price
        },
        include: {
            toko: true
        }
    })
    await prisma.$disconnect()
    return makanan
}

export const getPopularMakanan = async() => {
    const makanan = await prisma.makanan.findMany({
        where: {
            popular: true
        },
        include: {
            toko: true
        }
    })
    await prisma.$disconnect()
    return makanan;
}