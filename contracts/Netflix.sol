pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

import "./ExchangeCrowdsale.sol";

contract NetflixToken is MintableToken {
  string public constant name = "ENetflix";
  string public constant symbol = "ENFLX";
  uint256 public constant decimals = 21;
}

contract NetflixCrowdsale is ExchangeCrowdsale {

  function NetflixCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet)
    ExchangeCrowdsale(_startTime, _endTime, _rate, _cap, _wallet, "ENetflix", "ENFLX")
  {}

  function createTokenContract() internal returns (MintableToken) {
    return new NetflixToken();
  }
}
