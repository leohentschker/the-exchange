var ExchangeListing = artifacts.require("./ExchangeListing.sol");

module.exports = deployer =>
  deployer.deploy(ExchangeListing)