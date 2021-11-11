import { getOneToko } from "@/lib/db/toko";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const toko = await getOneToko(req.query.id)

    res.json(toko)
}
  