import Nav from "./nav/Nav.js";
import Todo from "./todo/Todo.js";
import Todos from "./todos/Todos.js";
const root = document.querySelector("#root");
``;
root?.appendChild(Nav());
root?.appendChild(Todo());
root?.appendChild(Todos());
root?.addEventListener("click", ({ target }) => {
    const id = target.id;
    if (id === "todoBtn") {
        const form = target.parentElement;
        form?.AddTodo(form);
    }
});
