pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

/**
 * @title ExchangeToken
 * @dev ERC20 compliant token representing shares of a stock
 */
contract ExchangeToken is MintableToken {

  uint256 public constant decimals = 24;
  string public symbol;

  function ExchangeToken(string _symbol) {
    symbol = _symbol;
  }
}
