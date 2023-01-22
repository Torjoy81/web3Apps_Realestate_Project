import { query } from "@/lib/db";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const queryStatement =
        "INSERT INTO Users (user_id,user_firstName, user_lastName, user_email,dateofbirth,country,phone_No ,password) VALUES (?,?,?,?,?,?,?)";
      const {
        first_Name,
        last_Name,
        email,
        phone_No,
        country,
        birthDay,
        passWord,
        cm_password,
      } = req.body;
      const user_value = [
        crypto.randomUUID(),
        first_Name,
        last_Name,
        email,
        birthDay,
        country,
        phone_No,
        passWord,
      ];
      await query({
        query: queryStatement,
        values: user_value,
      }).then(() => {});
    }
    res.status(200).json({ status: "Success" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
