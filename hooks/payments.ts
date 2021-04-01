import { useScript } from 'hooks/scripts';
import { PaytmCheckout, initiatePaytmTransaction } from 'helpers/payment/paytm';
import { useState } from 'react';

const PAYTM_URI = process.env.NEXT_PUBLIC_PAYTM_URI;
const PAYTM_MID = process.env.NEXT_PUBLIC_PAYTM_MID;


export const usePaytmCheckout = () => {
    const [loaded, setLoaded] = useState(!!PaytmCheckout());

    useScript(`${PAYTM_URI}/merchantpgpui/checkoutjs/merchants/${PAYTM_MID}.js`, {
        id: 'paytm-js',
        callback: () => {
            const CheckoutJS = PaytmCheckout();
            CheckoutJS.onLoad(() => setLoaded(true));
        },
    });

    return { loaded, paytm: initiatePaytmTransaction }
};
