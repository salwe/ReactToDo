import React from "react";

import NavBar from "./NavBar";
import TaskList from "./TaskList";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar />
                <TaskList />
            </div>
        );
    }

}