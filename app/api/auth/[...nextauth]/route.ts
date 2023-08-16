import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LineProvider from "next-auth/providers/line";

// const GOOGLE_CLIENT_ID =
// 	"11134474866-puv0t76cvjl4l99tiq02afacl17t7j3j.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),

		// LineProvider({
		// 	clientId: process.env.LINE_CLIENT_ID!,
		// 	clientSecret: process.env.LINE_CLIENT_SECRET!,
		// }),
	],
	callbacks: {
		async signIn({user, account, profile, email, credentials}) {
			return true;
		},
		async redirect({url, baseUrl}) {
			return baseUrl;
		},
		async session({session, user, token}) {
			return session;
		},
		async jwt({token, user, account, profile, isNewUser}) {
			if (account) {
				token.user = user;
			}
			return token;
		},
	},
});

export {handler as GET, handler as POST};
