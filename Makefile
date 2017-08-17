testnet:
	geth --rpc --testnet --fast --rpcapi eth,web3,net,personal --cache=512 --rpcport=8546

localnet:
	testrpc -u 0
