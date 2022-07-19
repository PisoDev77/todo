const inputs = {
    //input 속성들은 객체로 받아서 넣어준 뒤 반환해주는 함수
    makeInput: (props) => {
        const input = document.createElement("input");
        for (let [key, prop] of Object.entries(props)) {
            input.setAttribute(key, prop);
        }
        return input;
    }
};
export default inputs;
