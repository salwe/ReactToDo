import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import { removeTask } from "../Reducers/Actions";

class TaskList extends React.Component {
    render() {
        if (this.props.tasks.length) {
            return (
                <div className="row">
                    {this.props.tasks.map(el => <Task data={el} key={el.id} removeTask={this.props.removeTask.bind(this)} />)}
                </div>
            );
        }
        return <p>Empty</p>;
    }
}
const mapStateToProps = (state) => {
    //console.log(state);
    return {
        tasks: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (id) => {
            dispatch(removeTask(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);