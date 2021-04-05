import React, { useState } from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router'
import axios from 'axios';
import NProgress from 'nprogress';

import Page from 'components/organisms/Page';
import Spinner from 'components/atoms/Spinners';


const PaytmStatus: NextPage = () => {
    const router = useRouter();
    const { orderId } = router.query;

    const [status, setStatus] = useState('INVALID');
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        NProgress.start();

        axios.get(`/api/payment/paytm/status/${orderId}/`)
            .then(({ data }) => setStatus(data.status))
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setLoading(false);
                NProgress.done();
            });
    }, [orderId]);

    return (
        <Page title={`Status of order: ${orderId}`} description='Check your transaction status'>
            {loading && 'Loading...'}
            {!loading && (
                <>
                    STATUS: {status}
                </>
            )}
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session } };
}

export default PaytmStatus;
