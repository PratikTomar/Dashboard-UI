import React from "react";
import ListItem from "./ListItem";
import icon1 from "../assets/Frame (1).png";
import icon2 from "../assets/Frame 2.png";
import icon3 from "../assets/Frame (2).png";
import icon4 from "../assets/Frame (19).png";
import icon5 from "../assets/Frame (4).png";
import icon6 from "../assets/Frame (5).png";
import icon7 from "../assets/Frame (6).png";
import icon8 from "../assets/Frame (7).png";
import icon9 from "../assets/Frame (8).png";
import icon10 from "../assets/Frame (9).png";
import icon11 from "../assets/Frame (20).png";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="">
      <div className="menu-section">
        <div className="menu-group">
          <ListItem icon={icon1} text="Dashboard" active={true} />
          <ListItem icon={icon2} text="Assets" />
          <ListItem icon={icon3} text="Analysis" />
          <ListItem icon={icon4} text="Jobs" />
          <ListItem icon={icon5} text="Reports" />
          <ListItem icon={icon6} text="Transfers" />
        </div>
        <hr className="divider" />
        <div className="menu-group">
          <ListItem icon={icon7} text="Project" />
          <ListItem icon={icon8} text="Settings" />
          <ListItem icon={icon9} text="Support" />
          <ListItem icon={icon10} text="Feedback" />
          <ListItem icon={icon11} text="Raise Ticket" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
