module.exports = {
    trailingSlash: true,
    rewrites: () => [
        { source: '/donate/paytm/:amount/', destination: '/api/payment/paytm/donate/:amount/' },
    ],
};
