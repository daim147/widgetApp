import React, { useState } from "react";

const Accordions = ({ items }) => {
  const [index, setIndex] = useState("");
  // ! Clicked index
  const gettingClickIndex = (value) => {
    //   ! if user click on same div it should reset the index
    value === index ? setIndex("") : setIndex(value);
  };
  const accordianArray = items.map((item, i) => {
    const active = i === index ? "active" : "";
    return (
      <div
        className="accordion ui fluid styled"
        key={item.title}
        onClick={() => gettingClickIndex(i)}
      >
        <div className={`${active} title`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div className="ui container">{accordianArray}</div>;
};

export default Accordions;
