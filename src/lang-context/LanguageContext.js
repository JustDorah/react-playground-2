import React from "react";

//React supplies a function called createContext, this is what we can use to make our context. We can supply a default value as an argument,
//It's important to note that this context is in it's own file so it can be directly imported into any other file.
const LanguageContext = React.createContext({
  lang: window.navigator.language,
  setLang: () => {}
  //If setLang not there.. then...
  //Uncaught TypeError: _this.context.setLang is not a function
  // We need the updater function in place, even when it isn't doing anything, just to prevent any potential explosions inside our app.
});

export default LanguageContext;
