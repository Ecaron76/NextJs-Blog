// next-auth.config.js

import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import prisma  from '@/lib/connect'
import { AuthOptions, getServerSession } from 'next-auth';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
export const authOptions = {
  debug: true, 
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
} 

export const getAuthSession = () => getServerSession(authOptions)