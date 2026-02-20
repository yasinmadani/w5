const TronWeb = require('tronweb');

// Initialize the TronWeb instance
const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

const getWalletBalance = async () => console.log(`todo tox`); 

module.exports = { getWalletBalance };