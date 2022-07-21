
import {todoType} from "../type/todoTypes.js";

export default function TodoView({content, regDate}: todoType){
    const res = document.createElement("section");

        const contentDiv = document.createElement("div");
        contentDiv.innerText = content;

        const regDateDiv = document.createElement("div");
        regDateDiv.innerText = `${regDate.getDate()}/${regDate.getMonth()}`;

    res.appendChild(contentDiv);
    res.appendChild(regDateDiv);

    return res;
}