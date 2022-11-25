import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "Hello Abhisheeek");

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
const divWithChild = React.createElement("div",{id:"title"}, [
  React.createElement("h1", {id:"heading1"}, "Hello Abhisheeek"),
  React.createElement("h1", {id:"heading2"}, "Hello Abhisheeek"),
  React.createElement("h1", {id:"heading3"}, "Hello Abhisheeek")
]);

const FirstComponent = () => {
  return (
    <div>
      <h1>This is my FirstComponent {5 + 6} </h1>
      <SecondComponent />
      <SecondComponent />
      <SecondComponent />
       {divWithChild}
    </div>
  );
};
const SecondComponent = () => {
  return (
    <div>
      <h1>This is my FirstComponent {5 + 6} </h1>
    </div>
  );
};
//root.render(divWithChild)
root.render(<FirstComponent />);
