import { PrismaClient } from "@prisma/client";
import moment from "moment";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const uid = req.query.uid;
  console.log(uid);
  try {
    await prisma.user.update({
      where: {
        id: uid,
      },
      data: {
        emailVerified: moment().format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      },
    });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }

  if (!res.headersSent) {
    res.redirect("/login");
  }
}
