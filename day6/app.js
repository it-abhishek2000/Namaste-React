import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import example from "./example.json";
import fetchUser from "./fetchUsers";
import Card from "./card";
import SearchBar from "./searchBar";
const root = ReactDOM.createRoot(document.getElementById("root"));
const githubUserNames = [
  "gavandivya",
  "akshaymarch7",
  "ap221882",
  "Bhallora",
  "aditifarkya",
  "it-abhishek2000",
  "deepak-kumar-dev",
  "soumyagangamwar",
  "shreerajjadeja",
  "nikitaj-57",
];

const Header = () => <h1>Hii we are Brainy Fools</h1>;
const AllCard = ({ Data }) => {
  return Data.map((res, index) => <Card res={res} key={index} />);
};

const MainApp = () => {
  const [Data, setData] = useState(example);
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  async function fetchAll() {
    const res = await Promise.all(
      githubUserNames.map((user) => {
        const result = fetchUser(user);
        return result;
      })
    );
    setData(res);
  }

  return (
    <>
      <div className="title">
        <Header />
      </div>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="AllCard">
        <AllCard Data={Data} />
      </div>
    </>
  );
};

root.render(<MainApp />);
