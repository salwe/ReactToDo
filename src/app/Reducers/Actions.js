export const ADD_TASK = "ADD_TASK";
let taskId = 0;

export const addTask = (task) => ({
    type: ADD_TASK,
    id: taskId++,
    task
});