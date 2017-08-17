# The Exchange
When you think about it, the value of a stock is predicated on faith - faith in a company, faith in the economy and faith that you could sell that stock to someone else in the future. It doesn't matter if the share is a piece of paper or a digital record. The only thing that counts is a belief that the system granting it monetary value will continue to exist.

With that in mind, I propose that we create a new stock exchange based on the Ethereum protocol. Shares in organizations will be represented by tokens that can be bought, sold or traded. As long as users value these tokens like actual stocks, we will have a functioning blockchain-based exchange.

But, creating a decentralized exchange can do so much more than just replicate existing functionality. Placing smart contracts at the core of a financial system has the potential to completely change how the average person interacts with the stock market. Used correctly, they can create a financial system that treats everyone equally, no matter who they are or how big their bank account is.

That's why I'm excited about this idea. Hopefully you are too.

## Vocabulary
* **Virtual Share** - Virtual shares are made up of ERC20 compliant tokens purchased from the exchange. 10<sup>21</sup>
 tokens will represents a single virtual share.
* **Virtual Public Offering (VPO)** - In order to introduce shares into the market, The Exchange will sell virtual shares in
crowdsales called virtual public offerings. Share prices during these offerings will correspond to the relative price of the stock in Ether. In order to incentivize early adopters, early VPOs will be severely discounted.

## Rollout
Currently, five VPOs have been listed each selling 2000 virtual shares at a 75% discount.
* EFacebook - FIX
* EApple - FIX
* EAmazon - FIX
* ENetflix - FIX
* EGoogle - FIX

For example, sending 1 ether to the EFacebook crowdsale would give you FIX virtual shares.

## How to participate
You can buy shares by sending ether to any of the five addresses listed above. Do this either through your favorite Ethereum wallet or the command line. Below is an example of sending 1 ether to the EApple
crowdsale.

```javascript
web3.eth.sendTransaction({from: web3.eth.accounts[1], to: 'FIX', value: web3.toWei(1, 'ether')})
```
**NOTE:** Make sure that you understand the risks before participating in any crowdsale! As of now these tokens are non-refundable.

## Security
Obviously, security is crucuial for any application on the blockchain. In order to mitigate vulnerabilities, all token contracts and crowdsales inherit from open-sourced contracts built by [OpenZeppelin](https://openzeppelin.org/). If you find a security risk in one of the contracts, **please** email lhentschker@gmail.com
