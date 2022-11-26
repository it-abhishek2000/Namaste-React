import React from "react";
import ReactDom from "react-dom/client";


root = ReactDom.createRoot(document.getElementById('root'));

function SeachBar(){
    return (<>
        <div className="header">
            <a className="brand-name">
              <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="nothing" width="30px" height="30px"/>
              <h5>Namaste React BootCamp</h5>
            </a>
            <form className="searchbar">
                <input type="search" placeholder="search"></input>
                <button type="btn primary"> Search</button>
            </form>      
        </div>

    </>);
}
root.render(<SeachBar/>);
