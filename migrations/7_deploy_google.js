var deploymentManager = require('./stockDeployer')
var GoogleCrowdsale = artifacts.require("./GoogleCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
	let initialShares = 100
	let startBlock = deploymentManager.getStartBlock(web3.eth.blockNumber)
	let endBlock = deploymentManager.getEndBlock(web3.eth.blockNumber)
	let wallet = accounts[0]

	let googleDeploy = deploymentManager.rateAndCap(initialShares, 157.48, 318.93, .25)
	deployer.deploy(GoogleCrowdsale, startBlock, endBlock, googleDeploy.rate, googleDeploy.cap, wallet)
};