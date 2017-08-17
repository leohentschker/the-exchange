pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

import "./ExchangeCrowdsale.sol";

contract FacebookToken is MintableToken {
  string public constant name = "ETesla";
  string public constant symbol = "ETSLA";
  uint256 public constant decimals = 21;
}

contract FacebookCrowdsale is ExchangeCrowdsale {

  function FacebookCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet)
    ExchangeCrowdsale(_startTime, _endTime, _rate, _cap, _wallet, "ETesla", "ETSLA")
  {}

  function createTokenContract() internal returns (MintableToken) {
    return new FacebookToken();
  }
}
