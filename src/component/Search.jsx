import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [value, setValue] = useState("Programming");
  const [secondValue, setSecondValue] = useState(value);
  const [results, setResults] = useState([]);

  // !Handle the change of input
  const handleInput = ({ target: { value } }) => {
    setValue(value);
  };

  // ! only run when value change
  useEffect(() => {
    // ! when user type after some time the request will make
    const timeOutID = setTimeout(() => {
      setSecondValue(value);
    }, 500);

    // ! first time when useEffect will run clearTimer will be return again when it will run first clearTimer will run than settimeout

    return () => clearTimeout(timeOutID);
  }, [value]);

  // ! only when secondValue will change

  useEffect(() => {
    if (!secondValue) {
      setResults([]);
      return;
    }
    const searchWord = async () => {
      const res = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: secondValue,
        },
      });
      //   ! Extracting search array frrom response

      const { search } = res.data.query;

      //   ! Set result array

      setResults(search);
    };

    searchWord();
  }, [secondValue]);

  return (
    <div className="ui segment container">
      <form onSubmit={(e) => e.preventDefault()} className="ui form">
        <div className="field">
          <label>Type to Search</label>
          <input
            placeholder="Wikipedia Search"
            value={value}
            onChange={handleInput}
          />
        </div>
      </form>
      <div role="list" className="ui celled list">
        {results.map((result) => (
          <div key={result.pageid} role="listitem" className="item">
            <div className="right floated content">
              <a
                className="ui button"
                rel="noreferrer"
                target="_blank"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
              >
                Go
              </a>
            </div>
            <div className="content">
              <div className="header">{result.title}</div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
