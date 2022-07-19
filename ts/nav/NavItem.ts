
export default function NavItem(): HTMLUListElement {
    const res = document.createElement("ul"); 

    type navObj = {
        title: string
    }
    
    const navItems: navObj[] = [
        {
            title: "ToDo"
        },
        {
            title: "NotToDo"
        },
    ];
    
    for(let {title} of Object.values(navItems)){
        const li = document.createElement("li");
        li.innerText = title;
        res.appendChild(li);
    }

    return res;
}