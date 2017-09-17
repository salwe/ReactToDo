import React from "react";

import NavBar from "./NavBar";
import AddTask from "../containers/AddTask";
import TaskList from "../containers/TaskList";

class App extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <AddTask />
                    <TaskList />
                </div>
            </div>
        );
    }
}

export default App;