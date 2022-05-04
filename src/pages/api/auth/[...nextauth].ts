import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "c4b5dc6ba2bcf574dd78",
      clientSecret: "62e9394e1e2642488bf9d6cd2767addada3f8a7f",
    }),
    // ...add more providers here
  ],
});
