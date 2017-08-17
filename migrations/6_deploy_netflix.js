var deploymentManager = require('./stockDeployer')
var NetflixCrowdsale = artifacts.require("./NetflixCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
	let initialShares = 100
	let startBlock = deploymentManager.getStartBlock(web3.eth.blockNumber)
	let endBlock = deploymentManager.getEndBlock(web3.eth.blockNumber)
	let wallet = accounts[0]

	let netflixDeploy = deploymentManager.rateAndCap(initialShares, 157.48, 318.93, .25)
	deployer.deploy(NetflixCrowdsale, startBlock, endBlock, netflixDeploy.rate, netflixDeploy.cap, wallet)
};