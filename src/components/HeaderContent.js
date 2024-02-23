import React from 'react';
import '../styles/Dashboard.css';

const HeaderContent = () => {
  return (
    <header className="top-header">
     
        <h1 className="message">
          SGCloud agent not running. Please <span className="download-link">download</span> and launch SGCloud agent
        </h1>
    </header>
  );
};

export default HeaderContent;
