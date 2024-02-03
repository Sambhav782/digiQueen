import React, { useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import "./navbar.css";
export default function Navbar() {
  const [drop, setDrop] = useState(true);
  return (
    <div>
      <div className="navBody">
        <div className="navBanner">DigiQueen</div>
        <div className="navOptions">
          <div className="homeTab">Home</div>
          <div className="aboutTab">About</div>
          <div className="serviceTab">
            <div className="serviceButton" onClick={() => setDrop(!drop)}>
              Service <UilAngleDown />
            </div>
            <ul className={drop ? "serviceListOffline" : "serviceList"}>
              <li>Digital Marketing</li>
              <li>Video Production</li>
              <li>Graphic Design</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="contactTab">Contact</div>
        </div>
      </div>
    </div>
  );
}
