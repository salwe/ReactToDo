import { ADD_TASK, REMOVE_TASK } from "../actions/tasksActions";

export const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            //console.log(state);
            return [...state,
                {
                    id: action.id,
                    title: action.title
                }];
        case REMOVE_TASK:
            return state.filter(el => el.id != action.id);
        default:
            return state;
    }
};