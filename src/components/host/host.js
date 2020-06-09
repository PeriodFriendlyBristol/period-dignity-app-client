import React from "react";
import Form from "./form";
import "./host.css";
import { ReactComponent as Person } from "./svg/person-host.svg";

function Host() {
  return (
    <>
      <h1>Host a Period Friendly Box</h1>
      <Person />
      <p>Once approved, you will need:</p>
      <ul>
        <li>A box, ideally clear</li>
        <li>A printed red label</li>
        <li>To inform everybody who works on site</li>
      </ul>
      <Form />
    </>
  );
}
export default Host;
