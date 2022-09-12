import traits from "../../assets/traits.jpg";
import banner from "../../assets/banner2.png";
import nft from "../../assets/nft1.png";

import "./home.css";
function Home() {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="row p-0">
          <div className="col-md-12 p-0">
            <img src={banner} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto pt-5 my-auto mastermind">
            <img src={nft} alt=" No Pic" />
          </div>
          <div className="col-md-6 mx-auto pt-5 my-auto mastermind-text ">
            <h1>
              Strawberry Patch Kids
            </h1>
            <p>
              The SBPK have been growing on the Ethereum Blockchain and are almost ready to be harvested! By joining the discord, you can begin picking strawberries daily for your chance to win giveaways and qualify for a redeemable airdrop. This airdropped NFT will give your SBPK increased benefits, if you so choose.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6 mx-auto my-auto mastermind-text">
            <h1>
              Traits
            </h1>
            <p >
              Each Strawberry Patch Kid will grow to be randomly generated from a variety of characteristics. Make sure to look out for those chocolate covered strawberries, as they will have a specific role within our community.
            </p>
          </div>
          <div className="col-md-6 mx-auto pt-5 mastermind">
            <img src={traits} alt=" No Pic" />
          </div>
        </div>

      </div>
    </>
  );
}
export default Home;
