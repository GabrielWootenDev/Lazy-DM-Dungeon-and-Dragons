import React from "react";
import { Link } from "react-router-dom";
import { GiDragonHead } from "react-icons/gi";

function HomePage() {
  return (
    <>
      <h1 className="text-center"> Welcome to the LazyDM's Companion</h1>
      <div className="pt-5">
        <h3 className="text-center">
          Here you can generate different resources for your D&D game at random.
          Choose a tool below to get started!
        </h3>
        <div className="row pt-5 justify-content-center">
          <div className="iconDiv col col-sm-10 col-md-7 col-lg-5 col-xl-4 col-xxl-3 text-center border border-5 border-warning rounded-circle p-0">
            <Link to="" className="icon-link text-center text-decoration-none">
            <i>
              <GiDragonHead size={280} />
            </i>
            <p className="fs-4 pb-1">Random Encounter</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
