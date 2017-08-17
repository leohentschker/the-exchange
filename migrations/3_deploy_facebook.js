var deploymentManager = require('./stockDeployer')
var FacebookCrowdsale = artifacts.require("./FacebookCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
	let initialShares = 100
	let startBlock = deploymentManager.getStartBlock(web3.eth.blockNumber)
	let endBlock = deploymentManager.getEndBlock(web3.eth.blockNumber)
	let wallet = accounts[0]

	let facebookDeploy = deploymentManager.rateAndCap(initialShares, 157.48, 318.93, .25)
	deployer.deploy(FacebookCrowdsale, startBlock, endBlock, facebookDeploy.rate, facebookDeploy.cap, wallet)
};