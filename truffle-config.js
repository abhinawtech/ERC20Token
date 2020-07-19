const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config({path: "./.env"});
const AccountIndex=0;
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      network_id: "*",
      host: "127.0.0.1"
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545",AccountIndex);
      },
      network_id: 5777
    },
    goerli_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/a30955baedb54f3dbaf3b06f839114db",AccountIndex);
      },
      network_id: 5
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/a30955baedb54f3dbaf3b06f839114db",AccountIndex);
      },
      network_id: 3
    }
  },
  
  compilers: {
    solc: {
    version: "0.6.1"
    }
    }
};
