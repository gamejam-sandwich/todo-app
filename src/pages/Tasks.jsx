import { useState } from 'react';

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');

    function handleAddTask(e) {
        e.preventDefault();  // prevent page from refreshing on submission
        if (!inputText.trim()) return;  // ignore empty input

        const newTask = {
            id: Date.now(),
            text: inputText,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setInputText('');
    }

    function handleToggleTask(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div>
            <h1>My Tasks</h1>
            <form onSubmit={handleAddTask} style={{marginBottom: '1rem'}}>
                <input
                    type="text"
                    placeholder="Your next task is..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{marginBottom: '0.5rem'}}>
                        <span
                            onClick={() => handleToggleTask(task.id)}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                                marginRight: '1rem',
                            }}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}