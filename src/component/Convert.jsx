import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translate, setTranslate] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  useEffect(() => {
    // !Making settimeout

    const timeId = setTimeout(() => {
      setDebounceText(text);
    }, 800);

    // ! Clearing SetTimeOut

    return () => clearTimeout(timeId);
  }, [text]);

  // ! it will execute when ever setDebounce will set after timing

  useEffect(() => {
    //   ! if no text or language return

    if (!language || !text) return;

    // ! post request to googl api
    axios
      .post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      )

      .then((data) =>
        setTranslate(data.data.data.translations[0].translatedText)
      );
  }, [debounceText, language]);
  return (
    <div>
      <h2 className="ui header">Output</h2>
      <h3>{translate}</h3>
    </div>
  );
};

export default Convert;
