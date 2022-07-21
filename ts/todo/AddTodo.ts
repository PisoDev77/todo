import TodoView from "./TodoView.js";
import {todoType} from "../type/todoTypes.js";

export default function AddTodo(todo: HTMLFormElement){
    const addTodo: string = todo.todo.value;

    if(addTodo.trim() === ""){
        console.log("쪼렙");
        return;
    }else{

        const data: todoType = {
            content: addTodo,
            regDate: new Date(),
            modiDate: undefined,
        }
        const todos = document.querySelector("#todos");

        const todoSection = TodoView(data);
        

        todos?.appendChild(todoSection);
    }
};