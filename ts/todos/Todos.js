export default function Todos() {
    const res = document.createElement("article");
    res.id = "todos";
    console.log(this);
    this.getTodos = () => {
    };
    this.setTodos = () => {
    };
    return res;
}
