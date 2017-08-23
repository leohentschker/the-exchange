var ExchangeTicker = artifacts.require("./ExchangeTicker.sol")
var Exchange = artifacts.require("./Exchange.sol");

module.exports = async deployer => {
  let ticker = await ExchangeTicker.deployed()
  console.log("TICKER", ticker)
  deployer.deploy(Exchange, ticker.address)
}
