import { useEffect, useState } from 'react';
import NProgress from 'nprogress';

import { useScript } from 'hooks/scripts.hook';
import { PaytmCheckout, initiatePaytmTransaction } from 'helpers/payment/paytm.payment.helper';

const PAYTM_URI = process.env.NEXT_PUBLIC_PAYTM_URI;
const PAYTM_MID = process.env.NEXT_PUBLIC_PAYTM_MID;


export const usePaytmCheckout = () => {
    const [loaded, setLoaded] = useState(!!PaytmCheckout());

    useScript(`${PAYTM_URI}/merchantpgpui/checkoutjs/merchants/${PAYTM_MID}.js`, {
        id: 'paytm-js',
        callback: () => {
            const CheckoutJS = PaytmCheckout();
            CheckoutJS.onLoad(() => {
                setLoaded(true);
                NProgress.done();
            });
        },
    });

    useEffect(() => {
        NProgress.start();
    }, []);

    return { loaded, paytm: initiatePaytmTransaction }
};
