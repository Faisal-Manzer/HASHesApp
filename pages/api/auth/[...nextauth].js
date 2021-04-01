import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';

import NextAuthUserSchema from 'models/nextAuth/user';


export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: { jwt: true },
    callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
            if (account?.accessToken) token.accessToken = account.accessToken;
            if (user?.permissions) token.permissions = user.permissions;
            if (user?.id) token.uid = user.id;
            return token;
        },
        async session(session, token) {
            if (token?.accessToken) session.accessToken = token.accessToken;
            if (token?.permissions) session.user.permissions = token.permissions;
            if (token?.uid) session.user.uid = token.uid;
            return session;
        },
    },
    pages: {},
    jwt: process.env.JWT_ENCRYPTION_KEY,
    adapter: Adapters.TypeORM.Adapter(
        process.env.DATABASE_URL,
        {
            models: {
                User: NextAuthUserSchema,
            },
        },
    ),
});
