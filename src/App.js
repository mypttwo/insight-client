import "./cyborg.min.css";
import "./App.css";
import "./masonry.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "components/landing";
import HuntWhale from "./del/hunt/huntWhale";
import Hunt from "./del/hunt";
import Updates from "components/updates/updates";
import Uniswap from "components/updates/uniswap";
import Nav from "components/nav";
import Settings from "components/settings";
// import HuntWhale from "components/hunt/huntWhale_old";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        {/* <Route
          path="/settings"
          // @ts-ignore
          exact
          element={<Settings />}
        />
        <Route
          path="/hunt"
          // @ts-ignore
          exact
          element={<HuntWhale />}
        />
        <Route
          path="/updates"
          // @ts-ignore
          exact
          element={<Updates />}
        /> */}
        <Route
          path="/uniswap"
          // @ts-ignore
          exact
          element={<Uniswap />}
        />
        <Route
          path="*"
          // @ts-ignore
          element={<Landing />}
        />
      </Routes>
    </>
  );
}

export default App;
