require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strong cruise remember come gesture define army genuine'; 
let testAccounts = [
"0xf21f3b88f64de1bbc7c753a9f2d0c9fe17ef107b26d0ffd8f6e3d0681486fbda",
"0xbd78dbf3c348c8089836b20237576f580852af666e4c8837ca089c2d01d570e5",
"0x6f4d9313b74f76327870e93391c3fb7552b079e6ec4c81eb653231dd223c8815",
"0xb7c3c25ed2786c983dafb50c02973ee65d9d6418fe559f7a274c27b02be51fb0",
"0x83415c9e8331ea31f404d827c66b76b0060db75cda703d3396bb5d43197ffbfd",
"0x2127f624afca66326f9e0d7ce9529a65aab3a36d3d23e2d16b64c3fac45e2ff9",
"0xe659ca9e8ad6a00daef00b02dbb0c1979e0050dfb16d016e9fa6a9202780c186",
"0x86eacea01eecf0902147fc2d08516f28169b161f2726415cfa5442fbf3275eea",
"0xdb30d3ffc1ccb45ed25338ac259f1e0a2f9146b55512921b0e07bbcd6972fe95",
"0xbc2fe7deeea14df05dcf537ee9530c6c5f38a462ab72c181a5007b6ccb3d96c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

