module.exports = {
    apps: [
        {
            name: 'shopify-test-app',
            script: 'server/server.js',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
}
