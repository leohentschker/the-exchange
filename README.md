# The Exchange
It's about time Ethereum had a stock exchange.

## Vocabulary
Before getting into more details on The Exchange, it's important to introduce some vocabulary
* **Virtual Share** - Virtual shares are ERC20 compliant tokens purchased from the exchange. 10<sup>21</sup>
 tokens will represent a single traditional share.
* **Virtual Public Offering** - In order to introduce shares into the market, The Exchange will sell virtual shares in
Virtual Public Offerings. The price of the shares in these offerings will correspond to the relative price of the stock
in Ether. In order to incentivize early adopters, early offerings will be severely discounted.

## Participating in Day 0
You can participate in Day 0 by sending Ether to any of the five addresses listed on our [website](theexchange.io). You can do
this either through your favorite Ethereum wallet or on the command line. Below is an example of sending 1 ether to the EApple
crowdsale.

```javascript
web3.eth.sendTransaction({from: web3.eth.accounts[1], to: 'FIX', value: web3.toWei(.01, 'ether')})
```
**NOTE:** Make sure that you understand the risks before participating in any crowdsale!

## How many tokens of a stock represents a single share?
As of now 10<sup>21</sup> tokens represents a single stock share. This high number was chosen to ensure that accurate prices
can be assigned to the different tokens during crowdsales.

## What can I do with the shares I have purchased?
Because you are purchasing ERC20 tokens, you can do whatever you want! You can transfer  to other addresses, use them in your
own smart contracts, 

## Does this just make insider trading easier?
A fair criticism against the exchange is that by allowing users to buy stocks from an Ethereum address, it would simply make
insider trading and other illegal financial activities easier.

However, I would argue that bringing stock trading to the blockchain would have the opposite effect for two reasons. First, unlike traditional
stock exchanges, all trades are public on the blockchain. Therefore, anyone with an Ethereum node can see if 
Secondly, the Ethereum community has proved to have an unbelievable track record in discovering and thwarting malicious actors in the network. One 
