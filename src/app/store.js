import { createStore } from "redux";

import { tasks } from "./reducers/Tasks";


export const store = createStore(tasks);