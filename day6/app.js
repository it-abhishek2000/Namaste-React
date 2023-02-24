import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import example from "./utils/example.json";
import fetchUser from "./components/fetchUsers";
import Card from "./components/card";
import SearchBar from "./components/searchBar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import AboutUs from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import TeamInfo from "./components/TeamInfo";
import githubUserNames from "./utils/githubusername.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
import Header from "./components/header";
import ThemeContext from "./themeContext";

console.log(githubUserNames);

const AllCard = ({ Data }) => {
  return Data.map((res, index) => <Card res={res} key={index} />);
};
const SecondMain = ()=>{
  const [Data, setData] = useState(example);

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
  return (<>
  <div className="font-bold text-center text-xl border-gray-900">
        <SearchBar />
      </div>
      <div className=" flex flex-wrap justify-evenly mx-4 my-4">
        <AllCard Data={Data} />
      </div>
  </>);
}
const MainApp = () => {
 
  const [searchText, setSearchText] = useState("");
  const [ theme, setTheme ] = useState("light");
 

  

  return (
    <ThemeContext.Provider value={{theme:theme,setTheme:setTheme}}>
      <div className={"header font-bold text-center text-4xl p-1 h-12"+`${theme === "light"?"bg-white":"bg-slate-800"}`}>
        <Header />
      </div>  
      <Outlet />
    </ThemeContext.Provider>
  );
};

const appProvider = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <SecondMain />,
      },
      {
        path: "/teaminfo/:id",
        element: <TeamInfo />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path:"/search",
        element:<SearchBar/>
      }
    ],
  },
 
  
]);

root.render(<RouterProvider router={appProvider} />);
