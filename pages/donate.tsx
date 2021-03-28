import React, { useState } from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';


import Page from 'components/oragnisms/Page';
import Button from 'components/atoms/Button';
import { useScript } from 'hooks/scripts';
import { paytmTransaction } from 'helpers/payment/paytm';


interface Params {
    paytmURI: string;
    mid: string;
}


const Donate: NextPage<Params> = ({ paytmURI, mid }) => {
    const [amount, setAmount] = useState(100);
    const [started, setStarted] = useState(false);

    const loaded = useScript(`${paytmURI}/merchantpgpui/checkoutjs/merchants/${mid}.js`, {
        type: 'application/html',
        crossorigin: 'anonymous',
        id: 'paytm-js',
    });

    const donate = async () => {
        setStarted(true);
        await paytmTransaction(amount, 'DONATE');
        setStarted(false);
    };

    return (
        <Page>
            INR <input type='number' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            {' '}
            <Button
                className='bg-blue-700 text-blue-100' icon='ion-md-heart'
                loading={started}
                disabled={started || !loaded}
                onClick={donate}
            >
                Donate
            </Button>
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session, mid: process.env.PAYTM_MID, paytmURI: process.env.PAYTM_URI } };
}

export default Donate;
