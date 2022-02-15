import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";

ReactDOM.render(
  <h1 className="colorForH1">
   <Content/>
  </h1>,
  document.getElementById("root")
);

// const h1 = document.createElement("h1");
// h1.innerText = "Hello India";
// h1.classList.add("colorForH1");
// document.getElementById("content").append(h1);


// import add from "./funcs"
// console.log(add(1, 2));
// console.log(div(4, 2));

// const i = react.createElement(
//     "i",
//     {
//         className:"Italic-text"
//     },
//     "Italic text"
// );
// const h1 = react.createElement(
//   "h1",
//   {
//     className: "redText",
//   },
//   ["Hello Webpack ", i]
// );

// ReactDOM.render(
//     h1,
//     document.getElementById("root")
// );

