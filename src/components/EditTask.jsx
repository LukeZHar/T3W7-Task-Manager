import React from "react";

const EditTask = () => {
    const { taskId } = useParams();
    return (
        <div>
            <h2>Edit Task</h2>
            <p>Task ID: {taskId}</p>
            <p>Here you will view or edit tasks</p>
        </div>    
    )
};

export default EditTask;