import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";
import languageData from "./data";
const Translate = () => {
  const [language, setLanguage] = useState("");
  const [text, setText] = useState("");
  return (
    <div className="ui container segment">
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Wrtie Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <DropDown
        placeHolder="Select Language"
        inpuValue={language}
        setValue={setLanguage}
        data={languageData}
      />
      <Convert text={text} language={language}></Convert>
    </div>
  );
};

export default Translate;
