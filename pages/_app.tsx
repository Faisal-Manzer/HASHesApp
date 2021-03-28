import React, { useEffect } from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';

import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import 'styles/globals.css';
import 'styles/tailwind.css';


const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start());
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());
    }, []);

    return (
        <AuthProvider session={pageProps.session}>
            <Component {...pageProps} />
        </AuthProvider>
    );
};


export default App;
