import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { GiHobbitDwelling, GiDragonHead, GiOpenTreasureChest, GiPikeman } from "react-icons/gi";

function Menu() {
  return (
    <>
      <div className="navMenu col-12 col-sm-3 col-xl-2 px-sm-2 px-0 d-flex sticky-top">
        <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
          <Link
            to="/"
            className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img
              alt="Outline of a D20 dice"
              src="/images/d20-icon-favicon.png"
            />
          </Link>

          <ul
            className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link px-sm-0 px-2">
                <i>
                  <GiHobbitDwelling />
                </i>
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-sm-0 px-2">
                <i>
                  <GiDragonHead />
                </i>
                <span className="ms-1 d-none d-sm-inline">
                  Random Encounter
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-sm-0 px-2">
                <i>
                  <GiOpenTreasureChest />
                </i>
                <span className="ms-1 d-none d-sm-inline">Generate Loot</span>
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-link px-sm-0 px-2">
                <i>
                  <GiPikeman />
                </i>
                <span className="ms-1 d-none d-sm-inline">Random NPC</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
