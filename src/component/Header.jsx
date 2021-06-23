import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div>
      <div className="ui pointing menu">
        <Link className="item" href="/">
          Accordion
        </Link>
        <Link className="item" href="/search">
          Search
        </Link>
        <Link className="item" href="/dropdown">
          Dropdown
        </Link>
        <Link className="item" href="/translate">
          Translator
        </Link>
      </div>
    </div>
  );
};

export default Header;
