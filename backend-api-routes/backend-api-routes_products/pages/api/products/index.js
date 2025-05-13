import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  if (req.method !== "GET") res.status(405).json({ error: "Only GET allowed" });

  return res.status(200).json(getAllProducts());
}
