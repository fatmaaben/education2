import React from 'react';

function Topbar() {
  return (
    <div className="topbar">
      <button className="logout-button">Logout</button> {/* Bouton de déconnexion à gauche */}
      <div className="search-bar">
        <input type="text" placeholder="Find Something..." />
      </div>
      
    </div>
  );
}

export default Topbar;
