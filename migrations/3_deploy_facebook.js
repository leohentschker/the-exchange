var helper = require('./deploymentHelper')

module.exports = async (deployer, _, accounts) =>
  helper.stockDeployer(
    deployer,
    artifacts.require("./FacebookCrowdsale.sol"),
    accounts[0],
    web3.eth.blockNumber,
    helper.INITIAL_SHARES,
    helper.FACEBOOK_PRICE,
    helper.ETH_PRICE,
    helper.INITIAL_DISCOUNT
  )
