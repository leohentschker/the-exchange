const WEIPERETH = Math.pow(10, 18)
const TOKEN_DECIMALS = Math.pow(10, 21)

const calculateRate = (stockPrice, ethereumPrice, discount) =>
    Math.floor(ethereumPrice / stockPrice * discount * TOKEN_DECIMALS / WEIPERETH)

const calculateCap = (sharesCap, rate) =>
    Math.floor(sharesCap * TOKEN_DECIMALS / rate)

module.exports.rateAndCap = (sharesCap, stockPrice, ethereumPrice, discount) => {
    let rate = calculateRate(stockPrice, ethereumPrice, discount)
    let cap = calculateCap(sharesCap, rate)

    return { rate, cap }
}

module.exports.getStartBlock = blockNumber => blockNumber + 4

module.exports.getEndBlock = blockNumber => blockNumber + Math.pow(10, 10)
