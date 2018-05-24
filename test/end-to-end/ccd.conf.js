/* eslint-disable no-magic-numbers */
const waitForTimeout = parseInt(process.env.E2E_WAIT_FOR_TIMEOUT_VALUE) || 10000;
const waitForAction = parseInt(process.env.E2E_WAIT_FOR_ACTION_VALUE) || 100;

console.log('waitForTimeout value set to', waitForTimeout); // eslint-disable-line no-console
console.log('waitForAction value set to', waitForAction); // eslint-disable-line no-console

exports.config = {
  tests: './ccd/**/*.js',
  output: '../../functional-output',
  helpers: {
    Puppeteer: {
      url: 'https://www-ccd.nonprod.platform.hmcts.net',
      waitForTimeout,
      waitForAction,
      show: true,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--no-sandbox',
          `--proxy-server=http://proxyout.reform.hmcts.net:8080`,
          `--proxy-bypass-list=${process.env.E2E_PROXY_BYPASS}`
        ]
      }
    },
    ElementExist: { require: './helpers/ElementExist.js' },
    JSWait: { require: './helpers/JSWait.js' }
  },
  name: 'ccd Tests'
};