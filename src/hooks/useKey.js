import React from "react";

function useKey({ keyName, callback }) {
  React.useEffect(() => {
    function handleKey(event) {
      if (event.code === keyName) {
        callback(event);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [keyName, callback]);
}

export default useKey;
