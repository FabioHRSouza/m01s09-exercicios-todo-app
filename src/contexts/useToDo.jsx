import { useContext } from "react";
import { ToDoContext } from "./ToDoProvider";

export const useToDos = () => {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error("useToDo não está dentro do ToDoProvider");
    }
    return context;
    }
