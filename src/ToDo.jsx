import { useState } from 'react';
import deleteBtn from './assets/delete.svg';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import Tutorial from './Tutorial';
import Footer from './Footer';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
            Toastify({
                text: `Task '${newTask.toUpperCase()}' added`,
                duration: 3000,
                close: true,
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            }).showToast();
        } else {
            Toastify({
                text: "Please enter a task",
                duration: 3000,
                close: true,
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
            }).showToast();
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        Toastify({
            text: "Task deleted",
            duration: 3000,
            close: true,
            backgroundColor: "red",
            color: "white"
        }).showToast();
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        } else {
            Toastify({
                text: "Task is already at the top",
                duration: 3000,
                close: true,
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
            }).showToast();
        }
    };

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        } else {
            Toastify({
                text: "Task is already at the bottom",
                duration: 3000,
                close: true,
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
            }).showToast();
        }
    };

    return (
        <>
            <div className='todo-list'>
                <h1>To-Do-List</h1>

                <div className='step-1'>
                    <input type="text"
                        value={newTask}
                        placeholder='Enter a task...'
                        onChange={handleInputChange} />
                    <button
                        onClick={addTask}
                        className='add-btn'
                    >
                        Add
                    </button>
                </div>

                {tasks.length > 0 ? (
                    <>
                        <ol>
                            {tasks.map((task, index) =>
                                <li key={index}>
                                    <span className='text'>{task}</span>
                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteTask(index)}
                                        title='Delete Task'
                                    >
                                        <img src={deleteBtn} alt="delete" />
                                    </button>
                                    <button
                                        className="move-btn"
                                        onClick={() => moveTaskUp(index)}
                                        title="Move Up"
                                    >
                                        👆
                                    </button>
                                    <button
                                        className="move-btn"
                                        onClick={() => moveTaskDown(index)}
                                        title="Move Down"
                                    >
                                        👇
                                    </button>
                                </li>
                            )}
                        </ol>
                    </>
                ) : (
                    <div className='no-task-container step-2'>
                        <p>Click the {'"'}Add{'"'} button <br /> after entering your task in the input above !!</p>
                    </div>
                )}
            </div>
            <Tutorial />
            <div className="step-3">
                <Footer />
            </div>
        </>
    );
};

export default ToDo