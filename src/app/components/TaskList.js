import React from "react";

import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormVisible: false,
            tasks: []
        }
    }
    static get prefix() {
        return "todolist_";
    }

    addTask(event) {
        event.preventDefault();

        const tdTitle = event.target.td_title.value;
        const tdDesc = event.target.td_desc.value;
        const tdTime = event.target.td_time.value;

        var task = {tdTitle, tdDesc, tdTime};

        //let key = (`${this.prefix()}_0`);

        localStorage.setItem("todolist_0", `${tdTitle}&${tdDesc}&${tdTime}`);

        this.state.tasks.push(task);

        this.setState({
            tasks: this.state.tasks
        });

    }

    removeTask(storageKey) {
        localStorage.removeItem(storageKey);
    }

    switchFormVisible() {
        this.setState({
            isFormVisible: !this.state.isFormVisible
        });
    }

    loadTasks() {
        //let arr =
    }
    render() {
        const popup = (this.state.isFormVisible ? <AddTaskForm onSubmitAction={this.addTask.bind(this)} /> : null);
        var tasks = (this.state.tasks.length) ? this.state.tasks.map(el => <Task data={el}/>) : null;
        return(
            <div className="container">
                <button onClick={this.switchFormVisible.bind(this)} className="btn btn-primary">Add task</button>
                { popup }
                { tasks }
            </div>
        );
    }
}

export default TaskList;