const { web3 } = require("@openzeppelin/test-helpers/src/setup");

const Wallet =artifacts.require('Wallet');

contract('Wallet', (accounts)=>{
    let wallet;
    beforeEach(async ()=>{
        wallet = await Wallet.new([accounts[0], accounts[1], accounts[2]], 2);
        web3.eth.sendTransaction({from: accounts[0], to: wallet.address, value: 1000});
    });
});
