import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
