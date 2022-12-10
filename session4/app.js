import React, { useState } from "react";
import ReactDom from "react-dom/client";
import data from "./data.json";
import Card from "./cardcomponent.js";
import SeachBar from "./searchbar.js";
import { useState } from "react";
 
const  root = ReactDom.createRoot(document.getElementById("root"));

const Title = () => (
  <h1 className="teamtitle">Hiii, We are Briany Fools</h1>
);
const HeadingWithSeachBar = () => {
  return (
    <div className="header">
      <Title/>
      <SeachBar/>
    </div>
  );
};

const AllCard = ({searchResult}) =>
  searchResult.map((x) => {
    return <Card member={x} key = {x.id}/>;
  });

const Cardconatiner = () => {
  const [searchResult,setSearchResult] = useState(data);
  return (
    <> <Title/>
      <SeachBar setSearchResult={setSearchResult}/>
      <div className="Allcard" >
        <AllCard searchResult={searchResult}/>
      </div>
    </>
  );
};

root.render(<Cardconatiner/>);
