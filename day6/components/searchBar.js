const SearchBar = () => {
  return (
      <form>
        <input type="input" placeholder="Search here" className="p-2 m-5 rounded border-2 border-black-500"></input>
        <button type="submit" className="px-2 py-3.5 bg-gray-400 rounded text-sm">Search Here</button>
      </form>
  );
};
export default SearchBar;
