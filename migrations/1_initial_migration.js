var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, accounts) {
  console.log(accounts, "ACCOUNTS");
  deployer.deploy(Migrations);
};
