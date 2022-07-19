export default function NavItem() {
    const res = document.createElement("ul");
    const navItems = [
        {
            title: "ToDo"
        },
        {
            title: "NotToDo"
        },
    ];
    for (let { title } of Object.values(navItems)) {
        const li = document.createElement("li");
        li.innerText = title;
        res.appendChild(li);
    }
    return res;
}
