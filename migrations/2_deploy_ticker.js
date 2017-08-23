var ExchangeTicker = artifacts.require("./ExchangeTicker.sol")
var Exchange = artifacts.require("./Exchange.sol");

module.exports = async deployer => {
  deployer.deploy(ExchangeTicker)
}
