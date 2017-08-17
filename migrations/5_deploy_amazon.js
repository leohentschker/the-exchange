var deploymentManager = require('./stockDeployer')
var AmazonCrowdsale = artifacts.require("./AmazonCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
	let initialShares = 100
	let startBlock = deploymentManager.getStartBlock(web3.eth.blockNumber)
	let endBlock = deploymentManager.getEndBlock(web3.eth.blockNumber)
	let wallet = accounts[0]

	let amazonDeploy = deploymentManager.rateAndCap(initialShares, 157.48, 318.93, .25)
	deployer.deploy(AmazonCrowdsale, startBlock, endBlock, amazonDeploy.rate, amazonDeploy.cap, wallet)
};