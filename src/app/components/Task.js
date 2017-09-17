import React from "react";

const Task = (props) => {
    return (
        <div className="col-md-4">
            <div className="card text-center">
                <div className="card-block">
                    <h4 className="card-title">{props.data.title}</h4>
                    <button className="btn btn-primary">Start</button>
                </div>
            </div>
        </div>
    );
};

export default Task;