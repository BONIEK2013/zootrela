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
          <div className="container">
            <Icon />
          </div>

          <img src={logo} className="logo" alt="logo" />
        </div>
      </section>
      <section className="album-list">
        {alboums.map((newalbum, index) => {
          return <Album {...newalbum} key={newalbum.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Albumlist />);
