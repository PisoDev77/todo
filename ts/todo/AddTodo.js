export default function AddTodo(todo) {
    const addTodo = todo.todo.value;
    if (addTodo.trim() === "") {
        console.log("쪼렙");
        return;
    }
    else {
        const todos = document.querySelector("#todos");
        const div = document.createElement("section");
        div.innerText = addTodo;
        todos?.appendChild(div);
    }
}
;
