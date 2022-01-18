import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <Link to="hats/12" className="content-link">
        <div className="content">
          <div className="title">{title.toUpperCase()}</div>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </Link>
    </div>
  );
};
