import React from "react";
import { connect } from "react-redux";

//import AddTaskForm from "./AddTaskForm";
//import Task from "./Task";
import { addTask } from "../Reducers/Actions";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isFormVisible: false
        // }
    }

    render() {
        //const popup = (this.state.isFormVisible ? <AddTaskForm onSubmitAction={this.addTask.bind(this)} /> : null);
        //var tasks = (this.props.tasks.length) ? this.props.tasks.map(el => <Task data={el}/>) : null;
        return(
            <div>
                <p>Number: {this.props.tasks}</p>
                <button onClick={ () => (this.props.addTask({id:0,title:"Test"})) }>Add</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => {
            dispatch(addTask(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);