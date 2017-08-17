const WEIPERETH = Math.pow(10, 18)
const TOKEN_DECIMALS = Math.pow(10, 21)

const calculateRate = (stockPrice, ethereumPrice, discount) =>
    Math.floor(ethereumPrice / stockPrice * discount * TOKEN_DECIMALS / WEIPERETH)

const calculateCap = (sharesCap, rate) =>
    Math.floor(sharesCap * TOKEN_DECIMALS / rate)

const getStartBlock = blockNumber =>
  blockNumber + 4

const getEndBlock = blockNumber =>
  blockNumber + Math.pow(10, 10)


module.exports.stockDeployer = async (deployer, artifact, wallet, currentBlock, sharesCap, sharePrice, ethPrice, discount) => {
  let startBlock = getStartBlock(currentBlock)
  let endBlock = getEndBlock(currentBlock)
  let rate = calculateRate(sharePrice, ethPrice, discount)
  let cap = calculateCap(sharesCap, discount)
  return await deployer.deploy(artifact, startBlock, endBlock, rate, cap, wallet)
}

module.exports.ETH_PRICE = 157.48

module.exports.INITIAL_DISCOUNT = .25

module.exports.INITIAL_SHARES = 2000
