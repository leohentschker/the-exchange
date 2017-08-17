var helper = require('./deploymentHelper')

const STOCK_PRICE = 170.00

module.exports = async (deployer, _, accounts) =>
  helper.stockDeployer(
    deployer,
    artifacts.require("./FacebookCrowdsale.sol"),
    accounts[0],
    web3.eth.blockNumber,
    helper.INITIAL_SHARES,
    STOCK_PRICE,
    helper.ETH_PRICE,
    helper.INITIAL_DISCOUNT
  )
