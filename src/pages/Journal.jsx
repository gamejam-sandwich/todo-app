import { useState, useEffect } from 'react';

export default function Journal() {
    const [entries, setEntries] = useState(() => {
        const savedEntries = localStorage.getItem('my_entries');
        return savedEntries ? JSON.parse(savedEntries) : [];
    })

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        localStorage.setItem('my_entries', JSON.stringify(entries));
    }, [entries]);

    function handleSaveEntry(e) {
        e.preventDefault();
        if (!content.trim()) return;

        const newEntry = {
            id: Date.now(),
            title: title ? title.trim() : "Untitled Entry",
            content: content,
            date: new Date().toLocaleDateString(),
        }

        setEntries([...entries, newEntry]);
        setTitle('');
        setContent('');
    }

    function handleDeleteEntry(id) {
        setEntries(entries.filter((entry) => entry.id !== id));
    }

    return (
        <div>
            <h1>My Journal</h1>
            <form onSubmit={handleSaveEntry}>
                <input
                    type="text"
                    placeholder="Entry #52"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Today I saw..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Save Entry</button>
            </form>

            <div>
                {entries.length === 0 ? (
                    <p>No entries yet</p>
                ) : (
                    entries.map((entry) => (
                        <article key={entry.id}>
                            <h>{entry.title} {entry.date}</h>
                            <p>{entry.content}</p>
                            <button onClick={() => handleDeleteEntry(entry.id)}>Delete</button>
                        </article>
                    ))
                )
                }
            </div>
        </div>
    )
}
