import React from 'react'
import { connect } from 'react-redux'
import { addTask } from "../actions/tasksActions";

const AddTask = ({ dispatch }) => {
    let input;

    return (
        <div className="mt-3 mb-5">
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                  return;
                }
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