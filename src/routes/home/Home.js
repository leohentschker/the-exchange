import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import './Home.css'

const OverviewBox = ({ iconName, description }) => (
  <div className="overview-box">
    <FontAwesome
      name={iconName}
    />
    <h4 className="overview-description">
      {description}
    </h4>
  </div>
)

const AddressBox = ({ address, stock }) => (
  <div className="address-box text-center">
    <h3>{stock}</h3>
    <div className="stock-address">{address}</div>
  </div>
)

export default class Home extends Component {
  render() {
    return(
      <div>
        <div className="title-header">
          <h1>The Exchange - Day 0</h1>
        </div>
        <main className="container">
          <div className="pitch text-center offset-top-large">
            <h1>It's about time Ethereum had a stock exchange</h1>
            <div className="overview-container">
              <OverviewBox
                iconName="money"
                description="Use your Ether to buy, sell and trade shares directly on the blockchain"
              />
              <OverviewBox
                iconName="code"
                description="Leverage smart contracts to create fair financial systems"
              />
              <OverviewBox
                iconName="clock-o"
                description="Trade around the clock - Ethereum has no closing time"
              />
            </div>
          </div>
          <hr />
          <div className="action-items">
            <h2>Why build The Exchange?</h2>
            <h4>
              Putting stocks on the blockchain opens up opportunities that simply don't exist
              in traditional financial markets. Properly designed smart contracts
              can make sure that the average investor has the same opportunities as a hedge
              fund manager. However, an Ethereum-based exchange also creates security
              risks. In order to get the benefits of decentralization while mitigating
              the risk of vulnerabilities, the Ethereum community needs an open-sourced
              community-reviewed codebase. That is exactly what The Exchange hopes to be.
            </h4>
          </div>
          <div className="explanation">
            <h2>How does The Exchange work?</h2>
            <h4 className="margin-top">
              Right now, The Exchange is a collection of ERC20 compliant tokens. Each one of these tokens
              represents a publicly traded stock and users can become "virtual stockholders" by purchasing them.
              Because these virtual shares are ERC20 compliant, they can be bought, sold or traded
              with other Ethereum users.
            </h4>
            <h4 className="margin-top">
              With community support, we will be deploying more contracts soon!
            </h4>
          </div>
          <div className="action-items">
            <h2>What can I do on Day 0?</h2>
            <h4 className="margin-top">
              On Day 0, The Exchange is selling 2000 shares of five virtual stocks: EFacebook,
              EApple, EAmazon, ENetflix and EGoogle. As a bonus to Day 0 participants, these shares are
              being sold at a 75% discount of their current price. Shares can be purchased by sending
              funds to the addresses listed below.
            </h4>
          </div>
        </main>
        <div className="portals margin-top-large">
          <h1 className="text-center padding-top-large">Build your portfolio</h1>
          <div className="address-row">
            <AddressBox
              stock="EFacebook"
              address="0x123f681646d4a755815f9cb19e1acc8565a0c2ac"
            />
            <AddressBox
              stock="EApple"
              address="0x123f681646d4a755815f9cb19e1acc8565a0c2ac"
            />
          </div>
          <div className="address-row">
            <AddressBox
              stock="EAmazon"
              address="0x123f681646d4a755815f9cb19e1acc8565a0c2ac"
            />
            <AddressBox
              stock="ENetflix"
              address="0x123f681646d4a755815f9cb19e1acc8565a0c2ac"
            />
          </div>
          <div className="address-row">
            <AddressBox
              stock="EGoogle"
              address="0x123f681646d4a755815f9cb19e1acc8565a0c2ac"
            />
          </div>
        </div>
        <main className="container">
          <h2 className="padding-top-large">Get Involved</h2>
          <h4 className="margin-top have-faith">
            Just like the US economy, the exchange only works if people believe in it.
            If you want to be a part of this (or just check out the codebase), go <a href="https://www.dagithub.com">here</a>!
          </h4>
        </main>
      </div>
    )
  }
}
