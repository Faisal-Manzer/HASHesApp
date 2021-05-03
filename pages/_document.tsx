import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';


class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"  /> */}
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

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
