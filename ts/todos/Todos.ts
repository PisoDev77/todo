import {TodosInterface} from "../type/todoTypes.js";

export default function Todos(): TodosInterface{
    const res = document.createElement("article");
    res.id = "todos";

    console.log(this);
    
    this.getTodos = () => {

    };

    this.setTodos = () => {

    };

    return res;
}