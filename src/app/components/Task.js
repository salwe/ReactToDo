import React from "react";

const Task = (props) => {
    //console.log(props);
    return (
        <div className="col-md-4">
            <div className="card text-center mb-3">
                <div className="card-block">
                    <h4 className="card-title">{props.data.title}</h4>
                    <button className="btn btn-primary" onClick={() => {props.removeTask(props.data.id)}}>Done</button>
                </div>
            </div>
        </div>
    );
};

export default Task;