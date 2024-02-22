import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue, key) => {
  const [data, setData] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem(key));
    return contacts?.length > 0 ? contacts : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
