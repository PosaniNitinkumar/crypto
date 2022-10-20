const Web3 =require('web3');

//Set up web3
const web3Provider = new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER);

// Create connection with test net
const web3 = new Web3(web3Provider);

//create a new account
const account = web3.eth.accounts.create();
console.log(account);