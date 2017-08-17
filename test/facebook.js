// Perform sanity checks on the facebook token

import expectThrow from './expectThrow'
import helper from '../migrations/deploymentHelper'

var FacebookCrowdsale = artifacts.require('./FacebookCrowdsale.sol')
var FacebookToken = artifacts.require('./FacebookToken.sol')

contract('FacebookCrowdsale', async (accounts) => {
  let user1 = accounts[0]
  let user2 = accounts[1]

  let EXTENDED_RATE = 100
  let EXTENDED_CAP = Math.pow(10, 25)

  it('Check the initial balance of users in the crowdsale', async () => {
    let crowdsale = await FacebookCrowdsale.deployed()

    let tokenAddress = await crowdsale.token.call()
    let token = FacebookToken.at(tokenAddress)

    // check to see that we don't start out with any tokens
    let initialBalance = await token.balanceOf.call(user1)

    assert.equal(initialBalance, 0, "Initial balance not 0")
  })

  it('Check that we can buy tokens and that the rates are correct', async () => {
    let crowdsale = await FacebookCrowdsale.deployed()

    let tokenAddress = await crowdsale.token.call()
    let token = FacebookToken.at(tokenAddress)

    await crowdsale.sendTransaction({
      value: web3.toWei(helper.FACEBOOK_PRICE / helper.ETH_PRICE * helper.INITIAL_DISCOUNT),
      from: user2
    })

    let balance = await token.balanceOf(user2)
    assert.equal((balance / Math.pow(10, 21)).toFixed(3), "1.000", "Should have purchased one share")
  })

  it('Check that non-owners cannot update the exchange crowdsale', async () => {
    let crowdsale = await FacebookCrowdsale.deployed()
    await expectThrow(crowdsale.extend(EXTENDED_CAP, EXTENDED_RATE, { from: user2 }))
  })

  it('Check that owners can extend the crowdsale', async () => {
    let crowdsale = await FacebookCrowdsale.deployed()
    await crowdsale.extend(EXTENDED_CAP, EXTENDED_RATE, { from: user1 })

    let rate = await crowdsale.rate.call()
    let cap = await crowdsale.cap.call()

    assert.equal(rate, EXTENDED_RATE, "Extended rate isn't correct")
    assert.equal(cap, EXTENDED_CAP, "Extended cap isn't correct")

    // make sure that they increase the cap when extending
    await expectThrow(crowdsale.extend(EXTENDED_CAP, EXTENDED_RATE, { from: user1 }))
  })
})

contract('FacebookToken', async (accounts) => {

  it('Check that the properties were set on the token', async () => {
    // get the corresponding token
    let crowdsale = await FacebookCrowdsale.deployed()
    let tokenAddress = await crowdsale.token.call()
    let token = FacebookToken.at(tokenAddress)

    // get the properties of the token
    let name = await token.name.call()
    let symbol = await token.symbol.call()

    // validate the properties
    assert.equal(name, "EFacebook", "Name isn't correct")
    assert.equal(symbol, "EFB", "Symbol isn't correct")
  })
})