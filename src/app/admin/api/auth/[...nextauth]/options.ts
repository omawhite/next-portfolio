import GithubProvider from 'next-auth/providers/github';
import type { AuthOptions } from 'next-auth';

export const options: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
};
