import TodoView from "./TodoView.js";
export default function AddTodo(todo) {
    const addTodo = todo.todo.value;
    if (addTodo.trim() === "") {
        console.log("쪼렙");
        return;
    }
    else {
        const data = {
            content: addTodo,
            regDate: new Date(),
            modiDate: undefined,
        };
        const todos = document.querySelector("#todos");
        const todoSection = TodoView(data);
        todos?.appendChild(todoSection);
    }
}
;
