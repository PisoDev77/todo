import input from "../utils/inputs.js";
import AddTodo from "./AddTodo.js";


export default function Todo(){
    const res = document.createElement("form");

    const todoInput = input.makeInput({
        name:"todo",
        type:"text",
        placeholder:"실험전",
        required: true,
    });

    const todoBtn = input.makeInput({
        id:"todoBtn",
        type:"button",
        value:"+"
    });

    res.appendChild(todoInput);
    res.appendChild(todoBtn);

    res.AddTodo = AddTodo;

    return res;
}