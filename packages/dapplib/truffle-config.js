require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purse harvest clog onion suffer'; 
let testAccounts = [
"0x2e7ad1dc561b7436a6171e7a1757185155cd3e42ab2c3dabcba29a0fbe4537c1",
"0x0b48579c9ad788c9f3da0a881e4cbce90b8ea507e2c7b939895e65b46522edf3",
"0x5f5ee9ea11372386366ced105d20c911acec29efbbd9bf9593ffc94b028942ef",
"0x28f9ec159f6ba7c64c135b98a55e5bcfab89791c7f6278ea4ce044a98b6a9bcb",
"0x7ef737583827920d360b6c5fbaa2d7f48e569977685e6b88962390b7aa631fe6",
"0x82cc951d1f033fa84d771c86f9041987567ac6041259042d21ae5cc26195b056",
"0x90cc5d95c423a66e710d62af0a1d68ce504e3441aff93e477425adc27c2796b1",
"0x1ce626f56e68eb3f1ea4484328862224a4fc19e422ec97d59d18322c31993402",
"0x5315e329d0fdf057efaf9e1b11235dd5cb2c81cf158cc0c2a49c095a14c0da73",
"0xe041fffed060cc94d1c0c74c9ba3e895cf3073fa595a1ec037e581f039dfd17f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

