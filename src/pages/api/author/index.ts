import { Author, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[] | Author>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      const authors = await prisma.author.findMany();
      res.status(200).json(authors);
      break;

    case "POST":
      const author = await prisma.author.create({
        data: req.body,
      });
      res.status(201).json(author);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
