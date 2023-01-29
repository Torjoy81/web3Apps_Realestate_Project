import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { prisma } from "./lib/db";

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
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.API_KEY_SENGRID,
      },
    })
  );

  try {
    if (req.method === "POST") {
      await prisma.user
        .create({
          data: {
            first_name,
            last_name,
            email,
            phone_no,
            profession,
            dateOfbirth: new Date(dateOfbirth),
            password,
          },
        })
        .then(async (response) => {
          console.log(response);
          await transporter
            .sendMail({
              from: process.env.EMAIL_USER,
              to: process.env.EMAIL_REPLY,
              subject: "Email Verification",
              html: `<h1>This is the verification of your email</h1><p>please! press the below the link</p><a href=http://localhost:3000/api/auth/verify-email/user/${response.id}">verfiy Email</a>`,
            })
            .catch((error) => console.log(error.message));
        });
      res.status(201).json({ emailSend: true });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
