import { prisma } from "./lib/db";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      if ("image" in req.body) {
        const { user_id, image } = req.body;

        await prisma.user
          .update({
            where: {
              id: user_id,
            },
            data: {
              image: image,
            },
          })
          .then(() => {
            console.log("Success");
            res.status(200).json({ updateData: "success" });
          })
          .catch((error) => console.log(error.message));
      } else {
        const {
          user_id,
          first_name,
          last_name,
          phone_no,
          profession,
          country,
          about,
        } = req.body;
        await prisma.user
          .updateMany({
            where: {
              id: user_id,
            },
            data: {
              first_name: first_name,
              last_name: last_name,
              phone_no: phone_no,
              profession: profession,
              country: country,
              description: about,
            },
          })
          .then((value) => {
            res.status(200).json({ updateData: "success" });
          })
          .catch((error) => console.log(error.message));
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
