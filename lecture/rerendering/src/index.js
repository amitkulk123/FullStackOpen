import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/**
 * Method 1: Call render everytime you want to increment.
 * Not recommended since we can use states instead
 */

// let counter = 1;

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App counter={counter} />
// );

// let counter = 1;

// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App counter={counter} />
//   );
// };

// setInterval(() => {
//   refresh();
//   counter += 1;
// }, 1000);
