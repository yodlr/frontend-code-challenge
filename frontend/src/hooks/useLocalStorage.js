import { useState } from "react";

function useLocalStorage(key) {
  // call useState, "reserve piece of state"
  const [storedVal, setStoredVal] = useState(() => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (err) {
        console.error(err);
        return null;
    }
  });
  const setVal = (value) => {
      try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setStoredVal(value);
      } catch (err) {
          console.error(err);
      };
  };
  return [storedVal, setVal];
}

export default useLocalStorage;