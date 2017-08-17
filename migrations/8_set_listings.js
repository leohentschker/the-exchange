var ExchangeListing = artifacts.require("./ExchangeListing.sol");
var FacebookCrowdsale = artifacts.require("./FacebookCrowdsale.sol")
var AppleCrowdsale = artifacts.require("./AppleCrowdsale.sol")
var AmazonCrowdsale = artifacts.require("./AmazonCrowdsale.sol")
var NetflixCrowdsale = artifacts.require("./NetflixCrowdsale.sol")
var GoogleCrowdsale = artifacts.require("./GoogleCrowdsale.sol")

module.exports = async (deployer, network, accounts) => {
	let exchange = await ExchangeListing.deployed()

	let facebok = await FacebookCrowdsale.deployed()
	let apple = await AppleCrowdsale.deployed()
	let amazon = await AmazonCrowdsale.deployed()
	let netflix = await NetflixCrowdsale.deployed()
	let google = await GoogleCrowdsale.deployed()

	await exchange.addToken("EFB", facebok.address)
	await exchange.addToken("EAPPL", apple.address)
	await exchange.addToken("EAMZN", amazon.address)
	await exchange.addToken("ENFLX", netflix.address)
	await exchange.addToken("EGOOGL", google.address)
}