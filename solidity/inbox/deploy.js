 const HDWalletProvider = require("truffle-hdwallet-provider");
 const Web3 = require("web3");
 const { interface, bytecode } = require("./compile");

 // DEMO WALLET
 const provider = new HDWalletProvider(
    //  "sketch mule candy aspect crane coin envelope asset recall acoustic salad write",
    //  "https://rinkeby.infura.io/v3/dead3242727049a5afc840c16159efe0"
         "crack make uncle famous easily emerge recall define video bubble glove cool",
     "https://rinkeby.infura.io/v3/52ec737bb04b4ebe99029ea5b1cc024a"
     );

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('deploying from acct: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hey There!' ] })
        .send({ gas: '1000000', from: accounts[0] });

        console.log("Interface: ", interface);
    console.log('contract deployed to :', result.options.address);
};
deploy();