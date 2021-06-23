import { useEffect, useState } from "react";
function Route({ path, children }) {
  const [pathName, setPathName] = useState(window.location.pathname);
  useEffect(() => {
    const onlocationChange = (e) => {
      setPathName(window.location.pathname);
    };

    window.addEventListener("popstate", onlocationChange);
    return () => {
      window.removeEventListener("popstate", onlocationChange);
    };
  }, []);
  return pathName === path ? children : null;
}

export default Route;
