import React from 'react';
import ReactDOM from 'react-dom';
import  Pet  from './Pet';


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Sheer", animal: "lion", breed: "idk" }),
    React.createElement(Pet, { name: "Bagh", animal: "bagh", breed: "idk" }),
    React.createElement(Pet, {
      name: "Cheetah",
      animal: "cheetah",
      breed: "idk",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
