import prisma from "../prisma";

export const getAllToko = async() => {
    const toko = await prisma.toko.findMany({
        include: {
            kontak: true,
            makanan: true
        }
    })
    await prisma.$disconnect()
    return toko
}

/**
 * Update One Shop
 * @param {String} name - Nama Toko
 * @param {String} description - Deskripsi Toko
 * @param {String} address - Alamat Toko
 * @param {String} image - Gambar/Merek Toko
 * @param {String} website - Website Toko(opsional)
 * @param {Number} nomor - Nomor Kontak Toko
 * @param {String} id - ID Toko(Di isi otomati)
 * @returns 
 */
export const updateToko = async(name, description, address, image, website, nomor, id) => {
    const toko = await prisma.toko.update({
        where: {
            id
        },
        data: {
            name,
            description,
            address,
            image,
            kontak: {
                update: {
                    nomor,
                    website
                }
            }
        }
    })

    await prisma.$disconnect()
    return toko;
}

export const deleteToko = async(id) => {
    const toko = await prisma.toko.delete({
        where: {
            id
        }
    })
    await prisma.$disconnect()
    return toko;
}

export const getOneToko = async(id) => {
    const toko = await prisma.toko.findUnique({
        where: {
            id
        },
        include: {
            kontak: true,
            makanan: true
        }
    })
    await prisma.$disconnect()
    return toko
}

/**
 * Create One Shop
 * @param {String} name 
 * @param {String} address 
 * @param {String} description 
 * @param {String} image 
 * @param {Number} nomor 
 * @param {String} website 
 * @returns 
 */
export const createToko = async(name, address, description, image, nomor, website) => {
    const toko = await prisma.toko.create({
        data: {
            name,
            address,
            description,
            image,
            kontak: {
                create: {
                    nomor,
                    website
                }
            }
        },
        include: {
            kontak: true,
            makanan: true
        }
    })
    await prisma.$disconnect()
    return toko
}