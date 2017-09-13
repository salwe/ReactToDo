import { ADD_TASK } from "./Actions";

//reducers
export const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state,
                {
                    id: action.id,
                    title: action.text
                }];
        case "SUB_NUM":
            return Object.assign({}, state, {
                result: state.result - action.payload
            });
        default:
            return state;
    }
};