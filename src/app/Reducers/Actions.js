export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
let taskId = 0;

export const addTask = (title) => ({
    type: ADD_TASK,
    id: taskId++,
    title: title
});

export const removeTask = (id) => ({
    type: ADD_TASK,
    id
});