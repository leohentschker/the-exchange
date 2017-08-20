pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./ExchangeTicker.sol"
import "./ExchangeToken.sol"

/**
 * @title Exchange
 * @dev A decentralized stock market with live data
 *      feeds built using streamr
 */
contract Exchange is Ownable {

  ExchangeTicker public ticker;

  mapping (string => ExchangeToken) tokens;

  /**
  * @dev Create a ticker
  */
  function Exchange() {
    ticker = new ExchangeTicker();
  }

  /**
  * @dev Buy shares of the stock associated with the symbol
  * @param _symbol Symbol of the stock to buy
  */
  function buy (string _symbol) payable {

    // determine how many tokens 1 Wei is worth
    uint256 rate = ticker.getRate(_symbol);
    uint256 weiAmount = msg.value;
    uint256 numTokens = weiAmount.mul(rate);

    // get or create the associated token
    ExchageToken token;
    if (tokens[_symbol] == address(0)) {
      token = new ExchangeToken(_symbol);
    } else {
      token = tokens[_symbol];
    }

    token.mint(msg.sender, numTokens);
  }
}
