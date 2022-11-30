import React from "react";
import ReactDom from "react-dom/client";
import { Data } from "./data.js";
import Card from "./cardcomponent.js";

root = ReactDom.createRoot(document.getElementById("root"));

const HeadingWithSeachBar = () => {
  return (
    <div className="header">
      <h1 className="teamtitle">Hiii, We are Briany Fools</h1>
      <input className="search" type="search" placeholder="search"></input>
    </div>
  );
};

const AllCard = () =>
  Data.map((x) => {
    return <Card member={x} key={x.id} />;
  });

const Cardconatiner = () => {
  return (
    <>
      <HeadingWithSeachBar />
      <div className="Allcard">
        <AllCard />
      </div>
    </>
  );
};

root.render(<Cardconatiner />);
