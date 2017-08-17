pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

import "./ExchangeCrowdsale.sol";

contract AmazonToken is MintableToken {
  string public constant name = "EAmazon";
  string public constant symbol = "EAMZN";
  uint256 public constant decimals = 21;
}

contract AmazonCrowdsale is ExchangeCrowdsale {

  function AmazonCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet)
    ExchangeCrowdsale(_startTime, _endTime, _rate, _cap, _wallet, "EAmazon", "EAMZN")
  {}

  function createTokenContract() internal returns (MintableToken) {
    return new AmazonToken();
  }
}
