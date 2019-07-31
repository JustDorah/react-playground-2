import React, { Component } from "react";
import Child from "./Child";
import LangControls from "./LangControls";
import LanguageContext from "./LanguageContext";

export default class AppLang extends Component {
  state = {
    lang: window.navigator.language
  };

  //A function to update state
  handleSetLang = lang => {
    this.setState({ lang });
  };
  render() {
    const contextValue = { lang: this.state.lang };
    return (
      // <LanguageContext.Provider
      //   value={{
      //     lang: window.navigator.language
      //   }}
      // >
      <LanguageContext.Provider value={contextValue}>
        <div className="AppLang">
          {/* App context */}
          <Child />
          {/* <LangControls />
          created handler for state and passed the callback prop to langcontrols below as a prop called onSetLang
          then added --onClick={() => props.onSetLang('en-GB')} -- to langcontrols
           */}

          <LangControls onSetLang={this.handleSetLang} />
        </div>
      </LanguageContext.Provider>
    );
  }
}
