import React from 'react';

/**
 * Component to highlight substrings within a text based on a search query
 */
export function Highlight({ text, query }: { text: string; query: string }) {
    if (!query.trim()) return <>{text}</>;

    // Escape special regex characters
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <span
                        key={i}
                        style={{
                            color: 'var(--primary)',
                            fontWeight: 'bold',
                            backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
                            borderRadius: '4px',
                            padding: '0 2px'
                        }}
                    >
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}
