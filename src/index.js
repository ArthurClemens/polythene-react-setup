import React from "react";
import ReactDOM from "react-dom";
import { RaisedButton, Dialog } from "polythene-react";
import { addFastClick } from "polythene-fastclick"; // optional

import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

addFastClick()

const App = () => (
  <div>
    <RaisedButton
      label="Show dialog"
      events={{
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }}
    />
    <Dialog />
  </div>
);

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);