pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import "./ExchangeTicker.sol";
import "./ExchangeToken.sol";

/**
 * @title Exchange
 * @dev A decentralized stock market with live data
 *      feeds (populated using streamr)
 */
contract Exchange is Ownable {

  ExchangeTicker public ticker;
  address wallet;

  mapping (string => address) tokens;

  event Test(uint256 rate);

  /**
  * @dev Create a ticker
  * @param _tickerAddr Address of the ticker to read from
  */
  function Exchange(address _tickerAddr, address _wallet) {
    ticker = ExchangeTicker(_tickerAddr);
    wallet = _wallet;
  }

  /**
  * @dev Change the address of the ticker to read from
  * @param _newAddr New address to read from
  */
  function updateTicker(address _newAddr)
    onlyOwner()
  {
    ticker = ExchangeTicker(_newAddr);
  }

  /**
  * @dev Flush extra funds stored in the contract
  * @param _amount Amount of Wei to send
  */
  function flush(uint256 _amount)
    onlyOwner()
  {
    wallet.transfer(_amount);
  }

  /**
  * @dev Look up the address for one of the stocks
  * @param _symbol Symbol of the stock to look up
  */
  function lookup (string _symbol) constant returns (address) {
    return tokens[_symbol];
  }

  /**
  * @dev Buy shares of the stock associated with the symbol
  * @param _symbol Symbol of the stock to buy
  */
  function buy (string _symbol) payable {
    // ensure the purchase is valid
    require(msg.value > 0);

    // determine how many tokens 1 Wei is worth
    uint256 rate = ticker.getRate(_symbol);

    // make sure we are buying a valid stock
    require(rate > 0);

    uint256 numTokens = SafeMath.mul(msg.value, rate);

    // make sure the token exists
    if (tokens[_symbol] == address(0)) {
      tokens[_symbol] = new ExchangeToken(_symbol);
    }

    // mint the tokens
    ExchangeToken(tokens[_symbol]).mint(msg.sender, numTokens);

    // forward the funds to the wallet
    wallet.transfer(msg.value);
  }

}
