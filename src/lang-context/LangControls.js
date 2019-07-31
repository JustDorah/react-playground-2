import React from "react";
import LanguageContext from "./LanguageContext";

//why isn't the eng button disabled?
//it is. it's grayed out
//console.log(LanguageContext, "LanguageContext");

export default function LangControls(props) {
  return (
    //   the consumer component makes the passed context available by using render prop
    //consumes the context.. the data
    <LanguageContext.Consumer>
      {/* {function renderProp() { */}
      {/* contextNotes */}
      {value => {
        /* console.log(value); */
        /* by adding disabled={value.lang === ...
                  we are disabling the currently selected language button which happens to be 'en-US' */
        return (
          <>
            <button
              onClick={() => props.onSetLang("en-GB")}
              disabled={value.lang === "en-GB"}
            >
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("en-US")}
              disabled={value.lang === "en-US"}
            >
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button
              onClick={() => props.onSetLang("ko")}
              disabled={value.lang === "ko"}
            >
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}
