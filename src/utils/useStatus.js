import React, { useEffect, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    console.log(status);
  }, []);

  return status;
};

export default useStatus;
