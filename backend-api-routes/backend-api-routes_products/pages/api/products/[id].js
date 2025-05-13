import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
  if (req.method !== "GET") res.status(405).json({ error: "Only GET allowed" });

  const { id } = req.query;

  return res.status(200).json(getProductById(id));
}
