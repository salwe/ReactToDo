import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

class TaskList extends React.Component {
    render() {
        if (this.props.tasks.length) {
            return (
                <div className="row">
                    {this.props.tasks.map(el => <Task data={el} key={el.id}/>)}
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
export default connect(mapStateToProps)(TaskList);