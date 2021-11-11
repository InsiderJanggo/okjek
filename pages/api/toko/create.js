import { createToko } from "@/lib/db/toko";

/**
*
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    if(req.method == 'POST') {
        const {
            name,
            description,
            image,
            address,
            nomor,
            website
        } = req.body

        const newToko = await createToko(name, address, description, image, nomor, website);

        res.json(newToko)
    }
}
  