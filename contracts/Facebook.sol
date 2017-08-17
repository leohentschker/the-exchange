pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

import "./ExchangeCrowdsale.sol";

contract FacebookToken is MintableToken {
  string public constant name = "EFacebook";
  string public constant symbol = "EFB";
  uint256 public constant decimals = 21;
}

contract FacebookCrowdsale is ExchangeCrowdsale {

  function FacebookCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet)
    ExchangeCrowdsale(_startTime, _endTime, _rate, _cap, _wallet, "EFacebook", "EFB")
  {}

  function createTokenContract() internal returns (MintableToken) {
    return new FacebookToken();
  }
}
