import React, { Component } from "react";
import languageSpecificCopy from "./languageSpecificCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;

  render() {
    //const copy = languageSpecificCopy["en-US"] || {};
    //empty object copy to not crash, won't get info but prevents crashing.
    //blocked out the hard code (line 9) for line 13 after adding static contextType after importing LanguageContext

    const copy = languageSpecificCopy[this.context.lang];
    //this is a static Context type. look at contextNotes.
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    );
  }
}

export default GreatGrandChild;
