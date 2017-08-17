var ExchangeListing = artifacts.require("./ExchangeListing.sol");

module.exports = function(deployer, network, accounts) {
	deployer.deploy(ExchangeListing)
};
