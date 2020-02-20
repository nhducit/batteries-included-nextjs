// @ts-check
const withSourceMaps = require('@zeit/next-source-maps')
let withTM = require('next-transpile-modules')([
  'bs-platform',
  '@glennsl/bs-json',
])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const webpack = require('webpack')
withTM = true ? withTM : config => config
module.exports = withBundleAnalyzer(
  withSourceMaps(
    withTM({
      webpack: function(config, { isServer, buildId }) {
        if (process.env.USE_PREACT) {
          config.resolve.alias = {
            ...config.resolve.alias,
            react: 'preact/compat',
            react$: 'preact/compat',
            'react-dom': 'preact/compat',
            'react-dom$': 'preact/compat',
          }
        }

        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
          }),
        )

        if (!isServer) {
          // allow use same sentry config file in both browser and server
          config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }

        return config
      },
      env: {
        SECRET: process.env.SECRET,
        SENTRY_DSN: process.env.SENTRY_DSN,
      },
      // pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'bs.js'],
    }),
  ),
)
