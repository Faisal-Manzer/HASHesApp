import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';


class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                </Head>
                <body className='font-body font-medium bg-gray-50 text-gray-900'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
