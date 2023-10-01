import Web3 from "web3";
import smartPark from "./smartPark";

const rpcURL = "https://testnet.sapphire.oasis.dev";

let web3 = null;

export const getWeb3 = async () => {
  if (!(window.ethereum || window.web3)) {
    alert("Please install metamask!");
    return null;
  }
  if (!web3)
    web3 = new Web3(window.ethereum || window.web3.currentProvider || rpcURL);
  if (Number(await web3.eth.getChainId()) !== 23295)
    alert(`Wrong network! Please switch to Oasis Sapphire TestNet`);
  return web3;
};

export const getContractInstance = async () =>
  await new (
    await getWeb3()
  ).eth.Contract(smartPark.abi, smartPark.address);
