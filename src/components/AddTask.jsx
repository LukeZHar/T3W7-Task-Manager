import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [tasks, setTasks] = useLocalStorage('tasks',[]);
    const navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title,
            description
        };

        setTasks([...tasks, newTask]);
        navigate('/tasks');
    };

    return (
        <div>
            <h2>Add tasks</h2>
            <form onSubmit={ handleSumbit }>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Add Task</button>
            </form>
            <p>Here you will add new tasks</p>
        </div>
    );
};

export default AddTask;