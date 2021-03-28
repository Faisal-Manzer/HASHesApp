import React, { useState } from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router'


import Page from 'components/oragnisms/Page';
import axios from 'axios';


const PaytmStatus: NextPage = () => {
    const router = useRouter();
    console.log(router.query);
    const { orderId } = router.query;

    const [status, setStatus] = useState('INVALID');
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        axios.get(`/api/payment/paytm/status/${orderId}/`)
            .then(({ data }) => setStatus(data.status))
            .catch((e) => {
                console.log(e);
            })
            .finally(() => setLoading(false));
    }, [orderId]);

    return (
        <Page>
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
