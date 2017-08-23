// needed for async/await
require('regenerator-runtime/runtime')
require('babel-polyfill')

// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    "test": {
      network_id: 1,
      host: 'localhost',
      port: 8546,
    },
    "local": {
      network_id: 1,
      host: 'localhost',
      port: 8545,
    }
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
}
