import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const abi = [/* ABI from compiled contract */];
const address = "/* Contract Address */";

const contract = new web3.eth.Contract(abi, address);

export default contract;
