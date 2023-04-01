import { createContext } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  return (
    <ToDoContext.Provider value={{}}>
      {children}
    </ToDoContext.Provider>
  );
};