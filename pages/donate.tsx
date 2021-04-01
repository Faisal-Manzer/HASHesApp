import React, { useState } from 'react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/client';

import withAuthentication from 'components/hocs/withAuthentications';
import Page from 'components/organisms/Page';

import Button from 'components/atoms/Button';
import HeartIcon from 'components/icons/HeartIcon';

import { usePaytmCheckout } from 'hooks/payments';


const DefaultAmounts = [50, 100, 500, 1000];

const DonateButton = ({ price, amount, setAmount }) => (
    <Button onClick={() => setAmount(price)}
            className={`p-2 border-2 border-gray-100 rounded-lg text-lg justify-center transition duration-500 ease-in-out ${price === amount ? 'bg-black text-gray-100' : 'text-gray-500'}`}>
        &#8377; {price}
    </Button>
);


const Donate: NextPage = () => {
    const [amount, setAmount] = useState(100);
    const [started, setStarted] = useState(false);
    const { loaded, paytm } = usePaytmCheckout();

    const donate = () => {
        setStarted(true);
        paytm(amount, 'DONATE')
            .finally(() => setStarted(false));
    };

    return (
        <Page
            title='Show some love, Donate us'
            description=''
            className='text-center'
            hideDonateBanner={true}
        >
            <h1 className='text-black font-display font-black text-4xl md:text-7xl'>
                Donate <HeartIcon className='h-6 md:h-12 text-yellow-500' />
            </h1>

            <div className='flex justify-center items-center mt-8'>
                <div className='shadow-lg bg-white p-4 rounded'>
                    <div className='text-2xl md:text-3xl text-gray-300 font-display'>
                        Choose your amount.
                    </div>

                    <div className='my-2 md:my-4 grid grid-cols-2 gap-4'>
                        {DefaultAmounts.map((price) => (
                            <DonateButton key={price.toString()} price={price} setAmount={setAmount} amount={amount} />
                        ))}
                    </div>

                    <input
                        type='number'
                        placeholder='Your Custom Amount'
                        className={`w-full border-2 border-gray-100 rounded-lg text-lg ${DefaultAmounts.includes(amount)? 'bg-white text-gray-700' : 'bg-black text-gray-100'} focus:bg-black focus:text-gray-100 focus:border-black transition`}
                        onChange={(e) => setAmount(Math.abs(Number(e.target.value || 50)))}
                        min={1}
                    />

                    <Button
                        onClick={donate}
                        className='bg-yellow-600 text-white text-lg w-full justify-center mt-6'
                        loading={started || !loaded}
                        disabled={started || !loaded}
                    >
                        Show Some Love
                    </Button>
                </div>
            </div>
        </Page>
    );
};


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return { props: { session } };
}

export default withAuthentication(Donate);
