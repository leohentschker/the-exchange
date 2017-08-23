var Ticker = artifacts.require("./ExchangeTicker.sol");
var Exchange = artifacts.require("./Exchange.sol")

module.exports = (deployer, network, accounts) => {
  deployer.deploy(Ticker)
  .then(() => deployer.deploy(Exchange, Ticker.address, accounts[0]))
}
