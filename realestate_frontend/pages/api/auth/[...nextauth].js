import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60,
  },

  // adding user info to the user session object
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);
        const result = await prisma.user.findMany({
          where: {
            AND: [
              {
                email: { equals: credentials.email },
                password: { equals: credentials.password },
              },
            ],
          },
        });
        if (result) {
          const user = {
            id: result[0].id,
            email: result[0].email,
            firstName: result[0].first_name,
            lastName: result[0].last_name,
          };
          return user;
        } else {
          return { error: "User and password wrong" };
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        console.log(user);
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.accessToken = user.access_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        console.log(token);
        session.id = token.id;
        session.email = token.email;
      }
      return session;
    },
  },
});
