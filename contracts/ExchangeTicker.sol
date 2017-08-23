pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title ExchangeTicker
 * @dev Store exchange rates telling you how much virtual shares
 *      are worth in Wei
 */
contract ExchangeTicker is Ownable {

  mapping (string => uint256) internal rates;

  /**
  * @dev Set the price for a stock on the exchange
  * @param _symbol Symbol of the stock (ex. EAAPL)
  * @param _rate Rate of the stock
  */
  function setRate(string _symbol, uint256 _rate)
    onlyOwner()
  {
    rates[_symbol] = _rate;
  }

  /**
  * @dev Determine how many tokens are worth 1 wei
  * @param _symbol Symbol of the token
  * @return rate of the stock
  */
  function getRate(string _symbol) constant returns (uint256) {
    return rates[_symbol];
  }
}
