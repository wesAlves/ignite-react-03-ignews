import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { query as q } from "faunadb";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "c4b5dc6ba2bcf574dd78",
      clientSecret: "62e9394e1e2642488bf9d6cd2767addada3f8a7f",
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection("users"), { data: { email } }),
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
