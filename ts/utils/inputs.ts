
const inputs = {
    makeInput: (props: object) => {
        const input = document.createElement("input");

        for(let [key, prop] of Object.entries(props)){
            input.setAttribute(key, prop);
        }

        return input;
    }
};

export default inputs;