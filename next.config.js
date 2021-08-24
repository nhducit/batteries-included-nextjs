// @ts-check
const webpack = require('webpack')
const withSourceMaps = require('@zeit/next-source-maps')
//
const bsconfig = require('./bsconfig.json')
const transpileModules = ['rescript', 'bs-platform'].concat(
  bsconfig['bs-dependencies'],
)

let withTM = require('next-transpile-modules')(transpileModules)
// let withTM = require('next-transpile-modules')([
//   ''
//   'bs-platform',
//   '@glennsl/bs-json',
// ])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
if (!false) {
  // @ts-ignore
  withTM = function (config) {
    return config
  }
}

module.exports = withBundleAnalyzer(
  withSourceMaps(
    withTM({
      webpack: function (config, { isServer, buildId }) {
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
