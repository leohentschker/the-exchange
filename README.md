# The Exchange
When you think about it, the value of a stock is predicated on faith - faith in a company, faith in the economy and faith that you could sell that stock to someone else in the future. It doesn't matter if the share is a piece of paper or a digital record. The only thing that counts is a belief that the system granting it monetary value will continue to exist.

With that in mind, I propose that we create a new stock exchange based on the Ethereum protocol. Shares in organizations will be represented by standardized tokens that can be bought, sold or traded on the blockchain. As long as users value these tokens like actual stocks, we will have a functioning exchange.

But, creating a decentralized exchange can do so much more than just replicate existing functionality. Placing smart contracts at the core of a financial system has the potential to completely change how the average person interacts with the stock market. Used correctly, they can create a financial system that treats everyone equally, no matter who they are or how big their bank account is.

That's why I'm excited about this idea. Hopefully you are too.

## Vocabulary
* **Virtual Share** - Virtual shares are ERC20 compliant tokens purchased from the exchange. 10<sup>21</sup>
virtual shares will correspond to a single traditional share.
* **Virtual Public Offering (VPO)** - In order to introduce shares into the market, The Exchange will sell virtual shares in crowdsales called virtual public offerings. Share prices during these offerings will correspond to the relative price of the stock in Ether. In order to incentivize early adopters, early VPOs will be severely discounted but only sell a limited number of virtual shares.

## Rollout
Currently, five VPOs have been listed each selling 2 * 10<sup>24</sup> virtual shares (2,000 standard shares) at a 75% discount of their price in Ether at Friday, July 18, 4:00pm EST.
* EFacebook
  * Crowdsale address - 
  * Token address - 
* EApple
  * Crowdsale address - 
  * Token address - 
* EAmazon
  * Crowdsale address - 
  * Token address - 
* ENetflix
  * Crowdsale address - 
  * Token address - 
* EGoogle
  * Crowdsale address - 
  * Token address - 

## How to participate in a virtual public offering
You can buy shares by sending ether to any of the crowdsale addresses listed above. You can do this in your favorite Ethereum wallet or on the command line. Here is an example sending 1 ether to the EApple crowdsale two different ways

```javascript
web3.eth.sendTransaction({from: web3.eth.accounts[1], to: 'FIX', value: web3.toWei(1, 'ether')})
```
Based on the exchange rate as of writing this, you get FIX virtual shares.

**NOTE:** Make sure that you understand the risks before participating in any crowdsale! As of now these tokens are non-refundable.

## Check your portfolio
After participating in one of the VPOs, wallets with ERC20 support (like the Ethereum Wallet / Mist Wallet) will let your check your portfolio by adding custom tokens.
FIX

## Moving forwards
The next step is to start building contracts that allow users to do more with their virtual shares. To weigh in on what you are most interested in seeing (or get involved in the building process) comment [here](https://github.com/leohentschker/the-exchange/issues/1).

## Security
Obviously, security is crucial for any application on the blockchain. In order to mitigate vulnerabilities, all token contracts and crowdsales inherit from open-sourced contracts built by [OpenZeppelin](https://openzeppelin.org/). If you find a security risk in one of the contracts, **please** email lhentschker@gmail.com
