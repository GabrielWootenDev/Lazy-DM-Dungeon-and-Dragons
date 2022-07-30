import React from "react";
import Menu from "./Menu";
import Pages from "./Pages";
import "./layout.css";

function Layout() {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        <Menu />
        <div className="col d-flex flex-column h-sm-100">
          <main className="row overflow-auto">
            <div class="col pt-4">
              <Pages />
            </div>
          </main>
          <footer class="row py-4 mt-auto">
            <p>Website &copy; Gabriel Wooten 2022</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;
