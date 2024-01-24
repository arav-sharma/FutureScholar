import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@lib/mongodb"
import dbConnect from "@lib/dbConnect";
import User from "../../../../../Schemas/User";
import { compare } from "bcrypt";
import { env } from "@/env.mjs"

const handler = NextAuth({
    session: {strategy: "jwt"},
    jwt: {
        secret: env.NEXTAUTH_JWT_SECRET,
    },
    secret: env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            await dbConnect();
    
            // Find user with the email
            const user = await User.findOne({
              email: credentials?.email,
            });
    
            // Email Not found
            if (!user) {
              throw new Error("Email is not registered");
            }
    
            // Check hased password with DB hashed password
            const isPasswordCorrect = await compare(
              credentials!.password,
              user.hashedPassword
            );
    
            // Incorrect password
            if (!isPasswordCorrect) {
              throw new Error("Password is incorrect");
            }
    
            return user;
          },
        })
      ]
})

export { handler as GET, handler as POST }