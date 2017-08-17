pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

import "./ExchangeCrowdsale.sol";

contract AppleToken is MintableToken {
  string public constant name = "EApple";
  string public constant symbol = "EAPPL";
  uint256 public constant decimals = 21;
}

contract AppleCrowdsale is ExchangeCrowdsale {

  function AppleCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet)
    ExchangeCrowdsale(_startTime, _endTime, _rate, _cap, _wallet, "EApple", "EAPPL")
  {}

  function createTokenContract() internal returns (MintableToken) {
    return new AppleToken();
  }
}
