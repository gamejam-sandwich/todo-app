import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tasks from './pages/Tasks';

function Home() {
    return <h1>Journal cover</h1>;
}

function Journal() {
    return <h1>Journalling Page</h1>;
}

export default function App() {
    return (
        <div>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Tasks />} />
                <Route path="/journals" element={<Journal />} />
            </Routes>
        </div>
    )
}