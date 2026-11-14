import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h1>Journal cover</h1>;
}

function TodoList() {
    return <h1>To-Do List?</h1>;
}

function Journal() {
    return <h1>Journalling Page</h1>;
}

export default function App() {
    return (
        <div>
            <nav style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
                <Link to="/">Home</Link>
                <Link to="/todos">Tasks</Link>
                <Link to="/journals">Journal</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<TodoList />} />
                <Route path="/journals" element={<Journal />} />
            </Routes>
        </div>
    )
}