import { useState, useEffect } from 'react';
import './Journal.css';

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
        };

        setEntries([...entries, newEntry]);
        setTitle('');
        setContent('');
    }

    function handleDeleteEntry(id) {
        setEntries(entries.filter((entry) => entry.id !== id));
    }

    return (
        <div className="journal-container">
            <header className="journal-header">
                <h1>My Journal</h1>
                <span className="bear-face">ʕ •ᴥ• ʔ</span>
            </header>
            <form className="journal-form" onSubmit={handleSaveEntry}>
                <input
                    className="journal-input"
                    type="text"
                    placeholder="Entry #52"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="journal-textarea"
                    placeholder="Today I saw..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button className="journal-submit-btn" type="submit">Save Entry</button>
            </form>

            <div className="entriesFeed">
                {entries.length === 0 ? (
                    <p className="empty-state">No entries yet</p>
                ) : (
                    entries.map((entry) => (
                        <article className="entry-card" key={entry.id}>
                            <div className="entry-card-header">
                                <h3 className="entry-card-title">{entry.title}</h3>
                                <span className="entry-date">{entry.date}</span>
                            </div>
                            <p className="entry-content">{entry.content}</p>
                            <button className="entry-delete-btn" onClick={() => handleDeleteEntry(entry.id)}>Delete</button>
                        </article>
                    ))
                )
                }
            </div>
        </div>
    )
}
