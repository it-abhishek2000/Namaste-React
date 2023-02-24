
import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../themeContext";



const Card = ({ res }) => {

  const {theme,setTheme} = useContext(ThemeContext);

  return (
    <Link to={"/teaminfo/" + res?.login}>
      <div className={"m-3 w-72 h-92 rounded-xl flex flex-col items-center "+`${theme==="light"?"bg-teal-900 text-white":"bg-gray-200"}`}>
        <img src={res?.avatar_url} className="p-4 rounded-xl"></img>
        <h3 className="px-5 py-2 font-bold font-sans">Name - {res?.login}</h3>
        <h3 className="px-5 py-2 font-medium font-serif">
          Location - {res?.location}
        </h3>
      </div>
    </Link>
  );
};
export default Card;
