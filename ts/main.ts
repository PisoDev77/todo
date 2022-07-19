import Nav from "./nav/Nav.js";
import Todo from "./todo/Todo.js";

const root = document.querySelector("#root");

root?.appendChild(Nav());
root?.appendChild(Todo());

root?.addEventListener("click", ({target}) => {
    const id = (target as HTMLElement).id;
    if(id === "todoBtn"){   
        const form = (target as HTMLButtonElement).parentElement;
        form?.AddTodo(form);
    }
    
});

