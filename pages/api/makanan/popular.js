import { getPopularMakanan } from "@/lib/db/makanan";

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function handler(req, res) {
    const makanan = await getPopularMakanan();

    res.json(makanan)
}
  