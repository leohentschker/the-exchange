var helper = require('./deploymentHelper')

const STOCK_PRICE = 944.27

module.exports = async (deployer, _, accounts) =>
  helper.stockDeployer(
    deployer,
    artifacts.require("./GoogleCrowdsale.sol"),
    accounts[0],
    web3.eth.blockNumber,
    helper.INITIAL_SHARES,
    STOCK_PRICE,
    helper.ETH_PRICE,
    helper.INITIAL_DISCOUNT
  )
