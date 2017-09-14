import React from "react";
import { connect } from "react-redux";

//import AddTaskForm from "./AddTaskForm";
//import Task from "./Task";

class TaskList extends React.Component {

    render() {
        console.log(this.props);
        if (this.props.tasks) {
            return (
                <ul>
                    {this.props.tasks.map(el => <li>el.title</li>)}
                </ul>
            );
        }
        return <p>Empty</p>;
    }
}
const mapStateToProps = (state) => {
    console.log(`From map ${state}`);
    return {
        tasks: state.tasks
    };
};
export default connect(mapStateToProps)(TaskList);