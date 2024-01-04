import React from "react";

const useLocalStorage = (
  key: string, 
  initialValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState(() => {
    const localValue = window.localStorage.getItem(key);
    return localValue ? localValue : initialValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;