import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      credentials:{
        email:{label:"email",type:"email",placeholder:"Email"},
        password:{label:"password",type:"text",placeholder:"password"}
      },
      async authorize(credentials){
          const {email,password} = credentials;

          if (!email || !password){
            return null;
          }

          const res = await fetch(
            "http://localhost:3000/api/signin",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user = await res.json();
          
           if (res.ok && user) {
            return user;
          }

          return null;

      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Attach user information to the token if user exists
      if (user) {
        token._id = user._id; // Include _id
      }
      return token;
    },

    async session({ session, token }) {
      // Map fields from the token to the session
      session.user = {
        ...session.user, 
        _id: token._id, 
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
