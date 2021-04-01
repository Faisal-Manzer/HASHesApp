import axios from 'axios';

export const PaytmCheckout = () => {
    if (typeof window === 'undefined') return false;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return window && window.Paytm && window.Paytm.CheckoutJS;
}

export const initiatePaytmTransaction = async (amount, type) => {
    const { data: { txnToken, orderId } } = await axios.post('/api/payment/paytm/init/', {
        amount,
        type,
    });

    const config = {
        'root': '',
        'flow': 'DEFAULT',
        'data': {
            'orderId': orderId,
            'token': txnToken,
            'tokenType': 'TXN_TOKEN',
            'amount': amount,
        },
        'handler': {
            'notifyMerchant': function(eventName, data) {},
        },
    };

    const CheckoutJS = PaytmCheckout();
    if (CheckoutJS) {
        await CheckoutJS.init(config);
        CheckoutJS.invoke();
    }
};
