import axios from 'axios';

export const paytmTransaction = async (amount, type) => {
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
            'notifyMerchant': function(eventName, data) {
                console.log('notifyMerchant handler function called');
                console.log('eventName => ', eventName);
                console.log('data => ', data);
            },
        },
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const CheckoutJS = window.Paytm && window.Paytm.CheckoutJS;

    if (CheckoutJS) {
        await CheckoutJS.init(config);
        CheckoutJS.invoke();
    }
};
