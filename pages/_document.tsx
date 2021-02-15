import Document, { Html, Head, Main, NextScript } from 'next/document';


class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Montserrat:wght@100;400;900&display=swap'
                        rel='stylesheet' />
                </Head>
                <body className='bg-gray-100 font-body font-medium text-gray-500'>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
