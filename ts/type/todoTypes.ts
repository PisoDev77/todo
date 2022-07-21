type todoType = {
    content: string
    regDate: Date
    modiDate?: Date
}

interface TodosInterface {
    getTodos():void
    setTodos():void
}

export {todoType, TodosInterface};