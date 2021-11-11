import { addMakanan } from "@/lib/db/makanan";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    if(req.method == 'POST') {
        const {
            tokoId,
            name,
            price,
            image,
            popular
        } = req.body

        const newMakanan = addMakanan(tokoId, name, price, image, popular)

        res.json(newMakanan)
    }
}
  