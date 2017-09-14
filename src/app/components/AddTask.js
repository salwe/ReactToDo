import React from 'react'
import { connect } from 'react-redux'
import { addTask } from "../Reducers/Actions";

const AddTask = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                  return;
                }
                //console.log(input.value);
                dispatch(addTask(input.value));
                input.value = '';
                }}>
                <input ref={node => { input = node }} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
};

export default connect()(AddTask);
