import "./Artist.css";
import team1 from "../../assets/Team1.JPG";
import team2 from "../../assets/Team2.JPG";
import team3 from "../../assets/Team3.JPG";
import team4 from "../../assets/Team4.JPG";
import team5 from "../../assets/Team5.jpeg";


function Team() {
  return (
    <>
      <div id="Team">
        <div className="container">
          <h1 className="text-center py-5">Farming Guide</h1>
          <div className="row">
            <div className="col-md-4 team-section">
              <img src={team1} alt="" />
              <h1>Giveaways</h1>
              <p>
                We will always believe in paying it forward and giving back to those within our community! With 25% of the collection sold, we will begin a 30 day “harvest” with daily giveaways. In total, we plan to give out 10 Eth & 30 NFTs through both random and game based activities. More info will be announced in discord. There will also be a strawberry of the month chosen by our community at the end of the 30 day period, who will win a specific prize / opportunity.
              </p>
            </div>

            <div className="col-md-4 team-section">
              <img src={team2} alt="" />
              <h1>Charitable Donations</h1>
              <p>
                We believe in paying it forward and giving back! SBPK will be making 2 charitable donations to various foundations every quarter via a portion of secondary sales and treasury reserves.
              </p>
            </div>

            <div className="col-md-4 team-section">
              <img src={team3} alt="" />
              <h1>Strawberry Merch</h1>
              <p>
                Strawberries are sweet, and our merch will be too! The brand is colorful, fun and will always remain community focused. That’s why holders will have exclusive, first-right access to claim merchandise at discounted rates or free of cost (plus shipping where applicable). The community will help in the design process for some pieces, while others will feature specific SBPK. If your SBPK is chosen to be used on any merch, you will earn a royalty on each sale.
              </p>
            </div>

            <div className="col-md-4 team-section">
              <img src={team4} alt="" />
              <h1>SBPK Airdrops</h1>
              <p>
                All SBPK holders will benefit from airdrops exclusively affiliated with the SBPK brand, as well as any collaborators or partners.
              </p>
            </div>

            <div className="col-md-4 team-section">
              <img src={team5} alt="" />
              <h1>Community Garden</h1>
              <p>
                60% of the mint proceeds will be set aside into a community “garden” (wallet), dedicated to the funding and growth of the SBPK Farm.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Team;
