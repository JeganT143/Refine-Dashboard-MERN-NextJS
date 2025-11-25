import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
      clientSecret: `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`,
    }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};

export default authOptions;
