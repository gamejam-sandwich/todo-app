import { useState, useEffect } from 'react';

export default function Journal() {
    const [entries, setEntries] = (() => {
        const savedEntries = localStorage.getItem('my_entries');
        return savedEtnries ? JSON.parse(savedEntries) : [];
    })

    const [title, setTitle] = ('');
    const [content, setContent] = ('');

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
}