import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import NProgress from 'nprogress';

import Page from 'components/organisms/Page';

import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import PageHeading from 'components/atoms/PageHeading';
import HeartIcon from 'components/icons/HeartIcon';

import { usePaytmCheckout } from 'hooks/payments.hook';

const DefaultAmounts = [50, 100, 500, 1000];

const DonateButton = ({ price, amount, setAmount }) => (
    <Button
        onClick={() => setAmount(price)}
        className={`p-2 rounded-lg text-lg justify-center transition duration-500 ease-in-out ${
            price === amount ? 'bg-yellow-500 text-gray-100 shadow-lg' : 'text-gray-500 border-2 border-gray-100'
        }`}
    >
        &#8377; {price}
    </Button>
);

const Donate: NextPage = () => {
    const [amount, setAmount] = useState(100);
    const [started, setStarted] = useState(false);
    const [touched, setTouched] = useState(false);
    const { loaded, paytm } = usePaytmCheckout();

    useEffect(() => {
        if (loaded) NProgress.done();
    }, []);

    const donate = () => {
        setStarted(true);
        NProgress.start();

        paytm(amount, 'DONATE').finally(() => {
            setStarted(false);
            NProgress.done();
        });
    };

    return (
        <Page title='Show some love, Donate us' description='' hideDonateBanner={true} authenticationRequired={true}>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-4 space-x-4'>
                <div>
                    <PageHeading className='text-center'>
                        Donate <HeartIcon className='h-6 md:h-12 text-yellow-500' />
                    </PageHeading>

                    <div className='flex justify-center items-center my-2 md:my-4'>
                        <div className='shadow-lg bg-white p-4 rounded'>
                            <div className='text-2xl md:text-3xl text-gray-300 font-display'>Choose your amount.</div>

                            <div className='my-2 md:my-4 grid grid-cols-2 gap-4'>
                                {DefaultAmounts.map((price) => (
                                    <DonateButton
                                        key={price.toString()}
                                        price={price}
                                        setAmount={(amount) => {
                                            setAmount(amount);
                                            setTouched(false);
                                        }}
                                        amount={amount}
                                    />
                                ))}

                                <Input
                                    type='number'
                                    min={1}
                                    placeholder='Your Custom Amount'
                                    value={touched ? amount : ''}
                                    onChange={(value) => {
                                        setAmount(Number(value));
                                        setTouched(true);
                                    }}
                                    className='col-span-1 md:col-span-2'
                                />
                            </div>

                            <Button
                                onClick={donate}
                                className={`bg-black text-white text-lg w-full justify-center mt-6 ${
                                    (started || !loaded) && 'bg-gray-400'
                                }`}
                                loading={started || !loaded}
                                disabled={started || !loaded}
                            >
                                Show Some Love
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='text-xl text-gray-400'>
                    <div>
                        <div className='text-3xl text-black font-black'>TO SHARE IS TO GROW</div>
                        <br />
                        <p>
                            The journey of HASHes has been one filled with amazing and inspiring stories. Over the
                            years, we have grown into a large and supportive community, aimed at imparting education to
                            everyone irrespective of social boundaries.
                        </p>
                        <br />
                        <p>
                            We intend to increase our sphere of activities and try to reach more students and coding
                            enthusiasts. Such an endeavour is tough and requires financial support. Since HASHes is run
                            by students, we are dependent on you to get us going. Donate today and make a difference!
                            Every donation means a lot to us. Be assured, your aid will be used to spread the gift of
                            knowledge. Your generosity will be immensely appreciated.
                        </p>
                        <br />
                        HASHes Team
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Donate;
