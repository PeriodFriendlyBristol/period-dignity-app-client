import React from "react";
import Form from "../form/form";
import "./host.css";
import { ReactComponent as Person } from "./svg/person-host.svg";

function Host() {
  return (
    <>
      <div id="cell-1" class="cell">
        <h1>Host a Period Friendly Box</h1>
        <p>Once approved, you will need:</p>
      </div>
      <div id="cell-2" class="cell">
        <Person />
      </div>
      <div id="cell-3" class="cell">
        <ul>
          <li>A box, ideally clear</li>
          <li>A printed red label</li>
          <li>To inform everybody who works on site</li>
        </ul>
      </div>
      <div id="cell-4" class="cell">
        <p>
          This information will be reviewed and displayed publicly. Do not enter
          private/personal information.
        </p>
      </div>
      <div id="cell-5" class="cell">
        <Form />
      </div>
      <div id="bg-top"></div>
      <div id="bg-bottom"></div>
    </>
  );
}
export default Host;
