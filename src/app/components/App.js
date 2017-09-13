import React from "react";

import NavBar from "./NavBar";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

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