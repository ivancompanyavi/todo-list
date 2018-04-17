const todos = [
    {
        id: '1',
        title: 'Clean the dishes',
        description: 'I need to clean the dishes'
    },
    {
        id: '2',
        title: 'Copy from Github a React workshop',
        description: 'They will never know...'
    }
];

export const getTodos = async () => {
    return todos;
}

export const getTodo = async (todoId: string) => {
    let result = todos.find(todo => todo.id === todoId);
    if (!result) {
        result = {
            id: todoId,
            title: `TODO #${todoId}`,
            description: `This is the TODO number ${todoId}`
        }
    }
    return result;
}

export const setTodo = async (title: string, description: string) => {
    todos.push({ id: todos.length.toString(), title, description });
    return true;
}