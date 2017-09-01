import React from "react";

const AddTaskForm = ({onSubmitAction}) => {
    return(
        <div className="row">
            <form onSubmit={onSubmitAction.bind(this)}>
                <div className="form-group">
                    <label htmlFor="td_title">Title</label>
                    <input type="text" id="td_title" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="td_desc">Description</label>
                    <textarea type="text" id="td_desc" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="td_time">Time</label>
                    <input type="text" id="td_time" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Ok</button>
            </form>
        </div>
    );
};

export default AddTaskForm;