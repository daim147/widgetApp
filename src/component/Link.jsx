import React from "react";

function Link({ href, className, children }) {
  function handler(e) {
    e.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={handler} href={href} className={className}>
      {children}
    </a>
  );
}

export default Link;
