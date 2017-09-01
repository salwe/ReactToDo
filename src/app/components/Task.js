import React from "react";

const Task = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="card-block">
                <h4 className="card-title">{props.data.tdTitle}</h4>
                <p className="card-text">{props.data.tdDesc}</p>
                <p>Time left: {props.data.tdTime}</p>
                <button className="btn btn-primary">Start</button>
            </div>
        </div>
    );
};

export default Task;