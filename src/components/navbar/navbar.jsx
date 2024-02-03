import React from "react";
import { UilInfo } from "@iconscout/react-unicons";
import { UilEstate } from "@iconscout/react-unicons";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navBody">
        <div className="navName">digiQueen</div>
        <div className="navObj"></div>
        <UilInfo />
        <UilEstate />
      </div>
    </>
  );
}

export default Navbar;
