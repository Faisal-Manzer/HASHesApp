import Document, { Html, Head, Main, NextScript } from 'next/document';


class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link rel='preconnect' href='https://unpkg.com' />

                    <link
                        href='https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&family=Montserrat:wght@100;400;900&display=swap'
                        rel='stylesheet' />
                    <link href='https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css' rel='stylesheet' />
                </Head>
                <body className='font-body font-medium text-gray-700'>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
