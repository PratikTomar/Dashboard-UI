import React from "react";
import downArrow from "../assets/dropdown.png";
import icon18 from "../assets/Frame (18).png";

import group11 from "../assets/Group 11.png";
import group12 from "../assets/Group 12.png";
import group10 from "../assets/Group 10.png";
import group13 from "../assets/Group 13.png";
import "../styles/Dashboard.css";
const Card = ({ title }) => {
  return (
    <>
      <div className="card-header">
        <h1 className="title">{title}</h1>
        <div className="dropdown">
          <p className="dropdown-text">This week</p>
          <img src={downArrow} alt="Down arrow" className="dropdown-icon" />
        </div>
      </div>
      <div className="additional-items">
        <div className="additional-item">
          <img src={group11} alt="Rendering Jobs" className="item-icon" />
          <p className="item-text">Rendering Jobs</p>
          <span className="item-value">14</span>
        </div>
        <div className="additional-item">
          <img src={group12} alt="Waiting Jobs" className="item-icon" />
          <p className="item-text">Waiting Jobs</p>
          <span className="item-value">14</span>
        </div>
        <div className="additional-item">
          <img src={group10} alt="Completed Jobs" className="item-icon" />
          <p className="item-text">Completed Jobs</p>
          <span className="item-value">14</span>
        </div>
        <div className="additional-item">
          <img src={group13} alt="Failed Jobs" className="item-icon" />
          <p className="item-text">Failed Jobs</p>
          <span className="item-value">14</span>
        </div>
      </div>
    </>
  );
};

export default Card;
