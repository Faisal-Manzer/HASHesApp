import React from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router'

import Page from 'components/organisms/Page';
import { useAPI } from 'hooks/api.hook';
import Loading from 'components/atoms/Loding';


const OrderStatus = ({ orderId, image, salutation, heading, headingClass }) => (
    <div>
        <img className='h-28 md:h-56 w-auto m-auto' src={image} />
        <div className='text-4xl font-black mt-4'>
            {salutation}
            {' '}
            <span className={headingClass}>
                {heading}
            </span>
        </div>
        <div className='mt-2 text-xl text-gray-400'>
            Order ID: <b>{orderId}</b>
        </div>
    </div>
);


const PaytmStatus: NextPage = () => {
    const router = useRouter();
    const { orderId } = router.query;
    const { loading, data: { status } } = useAPI({
        url: `/api/payment/paytm/status/${orderId}/`,
        defaultResponse: { status: 'INVALID' }
    })

    return (
        <Page title={`Status of order: ${orderId}`} description='Check your transaction status'>
            <div className='flex items-center justify-center text-center'>

                {loading && <Loading />}

                {!loading && status === 'SUCCESS' && (
                    <OrderStatus
                        image='/images/Undraw-Payment-Success.svg'
                        salutation='Hurrayyy!!!'
                        heading='Payment was successfull.'
                        orderId={orderId}
                        headingClass='text-green-500'
                    />
                )}

                {!loading && status === 'FAILURE' && (
                    <OrderStatus
                        image='/images/Undraw-Payment-Failed.svg'
                        salutation='Oops,'
                        heading='Payment failed.'
                        orderId={orderId}
                        headingClass='text-red-500'
                    />
                )}

                {!loading && status === 'PENDING' && (
                    <OrderStatus
                        image='/images/Undraw-Payment-Pending.svg'
                        salutation=''
                        heading='Payment is pending.'
                        orderId={orderId}
                        headingClass='text-yellow-500'
                    />
                )}

                {!loading && status === 'INVALID' && (
                    <OrderStatus
                        image='/images/Undraw-Payment-Pending.svg'
                        salutation=''
                        heading='Payment is pending.'
                        orderId={orderId}
                        headingClass='text-yellow-500'
                    />
                )}
            </div>
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session } };
}

export default PaytmStatus;
