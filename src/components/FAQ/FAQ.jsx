import React from "react";
import "./FAQ.css";


const Roadmap = () => {
  const fontStyles = { color: "white", fontSize: "4rem", paddingLeft: "2rem", paddingBottom: "2rem" };

  return (
    <>
      <div className="container pb-5">
        <div className="row bg-white pb-5 footer-heading">
          <div className="col-md-4 m-auto footer-heading pt-5">
            <h1>Join us <br />on Discord !
            </h1>
            <div className='footer text-center mx-auto'>
              <a href="#"><i className="bi-discord text-center"></i></a>
            </div>
          </div>

        </div>

      </div>
      <div className="container-fluid pt-5">
        <div className="row bg-white pb-5 footer-heading-logo">
          <div className="col-md-4 m-auto footer-heading-logo pt-5">
            <h4>THE CRYPCENTRA NFT PROPERTY.</h4>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Roadmap;
