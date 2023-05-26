import React from "react";

const appWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <div className="app__wrapper app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default appWrap;
