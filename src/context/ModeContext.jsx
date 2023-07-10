import { createContext, useState, useContext, useEffect } from "react";

const ModeContext = createContext(null);

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || true
  );

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
    const root = window.document.documentElement;
    if (mode === false) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

const useModeContext = () => useContext(ModeContext);

export { useModeContext, ModeContextProvider };
