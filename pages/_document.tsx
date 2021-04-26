import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';


class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link rel='preload' href='https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&family=Montserrat:wght@100;400;900&display=swap' as='style' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&family=Montserrat:wght@100;400;900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body className='font-body font-medium bg-gray-50 text-gray-900'>
                    <Main />
                    <NextScript />

                    <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' async></script>
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
