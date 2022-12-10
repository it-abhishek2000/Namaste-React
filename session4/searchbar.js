import { useState } from "react";
import data from "./data.json";

const searchTeamMember = (searchText) => {
  return data.filter((da) => da.name.includes(searchText.toLocaleLowerCase()));
};
const SeachBar = ({ setSearchResult }) => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="searchbar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const searchResult = searchTeamMember(searchText);
          setSearchResult(searchResult);
        }}
      >
        <input
          className="search"
          id="cards"
          placeholder="Search Team Name"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <h1>{searchText}</h1>
        <button className="searchbtn">search</button>
      </form>
    </div>
  );
};
export default SeachBar;
