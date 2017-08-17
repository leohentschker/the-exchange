pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * @title ExchangeListing
 * @dev Store a mapping of trusted tokens
 */

contract ExchangeListing is Ownable
{
    mapping (string => address) tokens;

	/**
	* @dev Adds a new trusted token to the mapping
	* @param _token Symbol of the token (ex. EAAPL)
	* @param _address Address of the token contract
	*/
    function addToken(string _token, address _address)
        onlyOwner()
    {
        tokens[_token] = _address;
    }

    /**
    * @dev Gets the address corresponding to a listing
    * @param _token Symbol of the token
    */
    function getAddress(string _token) constant returns(address) {
        return tokens[_token];
    }
}
