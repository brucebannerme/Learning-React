import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./searchParam";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, { name: "Sheer", animal: "lion", breed: "idk" }),
  //   React.createElement(Pet, { name: "Bagh", animal: "bagh", breed: "idk" }),
  //   React.createElement(Pet, {
  //     name: "Cheetah",
  //     animal: "cheetah",
  //     breed: "idk",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me </h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
