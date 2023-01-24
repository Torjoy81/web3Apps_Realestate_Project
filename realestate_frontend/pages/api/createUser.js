import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    first_name,
    last_name,
    email,
    phone_no,
    profession,
    dateOfbirth,
    password,
  } = req.body;
  try {
    if (req.method === "POST") {
      try {
        const result = await prisma.user.create({
          data: {
            first_name,
            last_name,
            email,
            phone_no,
            profession,
            dateOfbirth: new Date(dateOfbirth),
            password,
          },
        });
        res.status(200).json({ response: result });
      } catch (error) {
        console.log(error);
      }

      // console.log(userForm);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
