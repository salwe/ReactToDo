import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import { tasks } from"./Reducers/Reducer";



const store = createStore(tasks);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content'));