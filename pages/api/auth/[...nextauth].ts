import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';

const options = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
        }
      },
    }),
  ],
});

export default options;