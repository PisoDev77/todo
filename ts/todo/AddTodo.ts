
export default function AddTodo(todo: HTMLFormElement){
    const addTodo = todo.todo.value;
    if(addTodo.trim() === ""){
        console.log("쪼렙");
        return;
    }else{
        console.log(addTodo);
    }
};