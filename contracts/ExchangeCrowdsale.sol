pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/crowdsale/FinalizableCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol";

/**
 * @title ExchangeCrowdsale
 * @dev Crowdsale of a token that can be repeated by updating the cap and rate
 */

contract ExchangeCrowdsale is CappedCrowdsale, FinalizableCrowdsale {

  string public symbol;
  string public name;

  function ExchangeCrowdsale(uint256 _startBlock, uint256 _endBlock, uint256 _rate, uint256 _cap, address _wallet, string _name, string _symbol)
    CappedCrowdsale(_cap)
    Crowdsale(_startBlock, _endBlock, _rate, _wallet)
  {
    symbol = _symbol;
    name = _name;
  }

  /**
   * @dev Update the cap and rate of the crowdsale if the new cap is greater than the old
   * @param _cap The new cap on the Wei to accept
   * @param _rate The new number of tokens to give per Wei sent
   */
  function extend(uint256 _cap, uint256 _rate)
    onlyOwner()
  {
    require(cap < _cap);
    rate = _rate;
    cap = _cap;
  }
}
