module.exports = {
    trailingSlash: true,
    publicRuntimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL,
        APP_HOSTED_URL: process.env.APP_HOSTED_URL,
        DATABASE_URL: process.env.DATABASE_URL,
        PAYTM_MID:  process.env.PAYTM_MID,
        PAYTM_URI:  process.env.PAYTM_URI,
    },
    rewrites: () => [
        { source: '/donate/paytm/:amount/', destination: '/api/payment/paytm/donate/:amount/' },
    ],
};
