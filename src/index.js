import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { alboums } from "./alboums";
import Album from "./alboum";
import logo from "./catPhotos/logo3.svg";
import Icon from "./icon";
const Albumlist = () => {
  return (
    <>
      <section className="main">
        <div className="main-banner">
          <Icon />
          <div className="link">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="center-section featured-center">
          {alboums.map((newalbum, index) => {
            return <Album {...newalbum} key={newalbum.id} number={index} />;
          })}
        </div>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Albumlist />);
