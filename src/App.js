import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import DropDown from "./component/DropDown";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Translate from "./component/Translate";
import { items, dropDownData } from "./component/data";
import Route from "./Route";
import Header from "./component/Header";

export default function App() {
  const [inpuValue, setValue] = useState("");
  return (
    <div>
      <br />
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/dropdown">
        <DropDown
          placeHolder="Select Color"
          inpuValue={inpuValue}
          setValue={setValue}
          data={dropDownData}
        />
        <div
          className="ui center aligned container"
          style={{ color: inpuValue ? inpuValue : "black" }}
        >
          <h1 className="content"> Hello world</h1>
        </div>
      </Route>
    </div>
  );
}
