module.exports = {
    trailingSlash: true,
    publicRuntimeConfig: {
        apiBaseURL: process.env.API_BASE_URL,
        appHostedURL: process.env.APP_HOSTED_URL,
        apiBaseSocket: process.env.API_BASE_SOCKET,
    },
    async rewrites() {
        return [
            {
                source: '/@:username/',
                destination: '/user/:username/',
            },
            {
                source: '/$:slug/',
                destination: '/topic/:slug/',
            },
            {
                source: '/$:slug/:debateId/',
                destination: '/topic/:slug/debate/:debateId/',
            },
        ];
    },
};
