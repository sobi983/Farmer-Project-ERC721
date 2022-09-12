import { React, useState, useEffect } from "react";
import Web3 from "web3";
import abi from "./abi.json";
import "./Minting-section.css";
import { white } from "./whiteaddresses.js";
import nft from "../../assets/home.PNG"

import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

const leaf = white.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leaf, keccak256, { sortPairs: true });
console.log("leaf value: "+merkleTree);

const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem", paddingBottom:"2rem" };

function checkWhitelist(a) {
  const check = keccak256(a);
  const proof = merkleTree.getHexProof(check);
  const root = merkleTree.getRoot();
  
  return merkleTree.verify(proof, check, root);
}

const Buy = ({ connecctstatus, setConnectedstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("CONNECT");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.05);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  // const [whitelistedUser, setWhitelistedUser] = useState(0);
  console.log("C", connecctstatus);
  
  function getProof(a) {
    const check = keccak256(a);
    return merkleTree.getHexProof(check);
  }
  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = "0x98FdDDF39a87f6708E842a940385C47c9078b375";
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.PRICE().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const supply = 7777;
      setTokenSupply(supply);
      const minted = await ct.methods.totalSupply().call();
      setMinted(supply-minted);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function mint() {

    const web3 = window.web3;
    const _value = price * quantity;
    let address = await web3.eth.getAccounts();
    address = address[0];
    let proof = getProof(address);
    let statusone = await contract.methods.status().call();
    // alert(checkWhitelist(address));
    if (statusone == 1) { 
      if(checkWhitelist(address)){
        await contract.methods
        .whitelistMint(quantity, proof)
        .send({ from: address, value: price * quantity });
      }
      else{
        alert("You are Not white listed")
      }
    } else if (statusone == 2) {
      await contract.methods
      .mint(quantity)
      .send({ from: address.toString(), value: _value });
    }
    
    const totalSupply = await contract.methods.totalSupply().call();
    setTokenSupply(totalSupply);
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      // setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <div id="Buynft" className="Buynft">
        <div className="container-fluid pt-5 ">
          <div className="row mx-auto text-center">
            <div className="col-md-6 mx-auto text-center">
              <img className="image" src={nft} alt="Pic" />
            </div>    
            <div className="col-md-5  ">
              <div className="col-md-12 btngroup ">
                <h1 className="mint-heading text-center">Farming Guide</h1>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Price</h4>
                    <h4 style={{ color: "white" }} className="float-right ">{priceInEth} ETH</h4>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }} className="pt-2">Quantity</h4>
                    <div
                      className="d-flex rounded btngroup "
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        className="btn increment-btn m-0 p-0"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <button type="button" className="btn text-white btn-size">
                        {quantity}
                      </button>
                      <button
                        className="btn increment-btn m-0 p-0"
                        onClick={() => {
                          if (quantity < 10) {
                            setQuantity(quantity + 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Total</h4>
                    <h4 style={{ color: "white" }} className="float-right">{supply}</h4>
                  </div>
                </div>
                <div className="row border-btm">
                  <div className="col-md-12 mint-col">
                    <h4 style={{ color: "white" }}>Remaining</h4>
                    <h4 style={{ color: "white" }} className="float-right">{minted}</h4>
                  </div>
                </div>
                <p className="text-center py-5">
                  <button href="#Buynft"
                    className="btn   mint-btn"
                    onClick={async () => {
                      await connectWallet();
                      await mint();
                    }}
                  // disabled
                  >
                    Mint Now
                  </button>
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Buy;