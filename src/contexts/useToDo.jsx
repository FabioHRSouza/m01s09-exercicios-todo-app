import { useContext } from "react";
import { ToDoContext } from "./ToDoProvider";

export const useToDos = () => {
    const context = useContext(ToDoContext);
    if (!context) {
        throw new Error("useToDo must be used within a ToDoProvider");
    }
    return context;
    }
