import React from 'react';

const ListItem = ({ icon, text, active = false }) => {
  const ListItemClass = active ? "menu-item active" : "menu-item";

  return (
    <div className={ListItemClass}>
      <img src={icon} alt={text} className="menu-icon" />
      <span className="menu-text">{text}</span>
    </div>
  );
};

export default ListItem;
