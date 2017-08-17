pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

import "./ExchangeCrowdsale.sol";

contract GoogleToken is MintableToken {
  string public constant name = "EGoogle";
  string public constant symbol = "EGOOGL";
  uint256 public constant decimals = 21;
}

contract GoogleCrowdsale is ExchangeCrowdsale {

  function GoogleCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet)
    ExchangeCrowdsale(_startTime, _endTime, _rate, _cap, _wallet, "EGoogle", "EGOOGL")
  {}

  function createTokenContract() internal returns (MintableToken) {
    return new GoogleToken();
  }
}
