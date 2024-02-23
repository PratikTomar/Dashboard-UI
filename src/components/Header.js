import React from 'react';
import '../styles/Header.css';
import dropdown from '../assets/dropdown.png';
import gift from '../assets/Gift.png';
import notification from '../assets/Notification.png';
import UserImage from '../assets/Ellipse 1.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="project-section">
          <div className="project-info">
            <h1 className="project-name">Default Project</h1>
            <img src={dropdown} alt="Toggle project menu" className="project-toggle-icon" />
          </div>
          <div className="header-icons">
            <img src={gift} alt="Gift" className="icon" />
            <img src={notification} alt="Notification" className="icon" />
          </div>
        </div>
        <div className="user-section">
          <img src={UserImage} alt="User" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">Daren Joe</span>
            <img src={dropdown} alt="Toggle user menu" className="user-toggle-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
