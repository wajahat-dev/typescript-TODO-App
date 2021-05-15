import React from 'react';
import {ITask} from "../interfaces"

interface Props {
    task: ITask
    id: number
    deleteTask: (e: number) => void
}


const TodoTask: React.FC<Props> = ({task,id,deleteTask}) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskname}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => deleteTask(id)}>X</button>
        </div>
    );
}

export default TodoTask;
