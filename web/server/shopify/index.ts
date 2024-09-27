import { LATEST_API_VERSION } from '@shopify/shopify-api'
import { ShopifyApp as ShopifyAppInterface, shopifyApp } from '@shopify/shopify-app-express'
import { MySQLSessionStorage } from '@shopify/shopify-app-session-storage-mysql'
import { Env } from '#configs/env'

let { restResources } = await import(`@shopify/shopify-api/rest/admin/${LATEST_API_VERSION}`)

const shopify: ShopifyAppInterface = shopifyApp({
    api: {
        apiKey: Env.SHOPIFY_API_KEY,
        apiSecretKey: Env.SHOPIFY_API_SECRET || '',
        scopes: Env.SCOPES,
        // hostScheme: "https",
        // hostName: `localhost:${PORT}`,
        apiVersion: LATEST_API_VERSION,
        restResources,
        future: {
            customerAddressDefaultFix: true,
            lineItemBilling: true,
            unstable_managedPricingSupport: true,
        },
        billing: undefined,
    },
    auth: {
        path: '/api/auth',
        callbackPath: '/api/auth/callback',
    },
    webhooks: {
        path: '/api/webhooks',
    },
    sessionStorage: MySQLSessionStorage.withCredentials(Env.DB_HOST, Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
        connectionPoolLimit: 20,
    }),
})

export { shopify }
export const apiVersion = LATEST_API_VERSION
