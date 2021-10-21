import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent
      handleClick={() => {
        alert("This is a no touching zone! How dare you!");
      }}
    />
  </div>,
  document.getElementById("root")
);
