import React, { useState } from "react";
import "./FAQ.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center faq-border mt-3">
          <div className="accordion-item ">
            <div
              className="accordion-title "
              onClick={() => setIsActive(!isActive)}
            >
              <div className="inlineLeft">{title}</div>
              <div className="inlineRight">{isActive ? "-" : "+"}</div>
              <div className="clear"></div>
            </div>
            {isActive && (
              <div className="accordion-content p-0 m-0 accContent">
                {content}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
