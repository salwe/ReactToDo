import { ADD_TASK } from "./Actions";

//reducers
export const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log(state);
            return [...state,
                {
                    id: action.id,
                    title: action.text
                }];
        default:
            return state;
    }
};