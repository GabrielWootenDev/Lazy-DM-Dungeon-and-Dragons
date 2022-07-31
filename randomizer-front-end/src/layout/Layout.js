import React from "react";
import Menu from "./Menu";
import Pages from "./Pages";
import Footer from "./Footer";
import "./layout.css";

function Layout() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        <Menu />
        <div className="col d-flex flex-column h-sm-100">
          <main className="row overflow-auto">
            <div className="col pt-4">
              <Pages />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
