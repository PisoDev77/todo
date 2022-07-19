import NavItem from "./NavItem.js";
export default function Nav() {
    const res = document.createElement("nav");
    res.appendChild(NavItem());
    return res;
}
