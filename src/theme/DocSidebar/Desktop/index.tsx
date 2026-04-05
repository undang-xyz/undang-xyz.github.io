import React, { type ReactNode, useState, useMemo, useEffect } from 'react';
import DocSidebarDesktop from '@theme-original/DocSidebar/Desktop';
import type DocSidebarDesktopType from '@theme/DocSidebar/Desktop';
import type { WrapperProps } from '@docusaurus/types';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useMobileSidebar } from '@site/src/theme/SidebarContext';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocSidebarDesktopType>;

/**
 * Filter sidebar items recursively based on search query
 */
function filterSidebar(items: readonly PropSidebarItem[], query: string): PropSidebarItem[] {
    if (!query) return [...items];
    const lowerQuery = query.toLowerCase();

    return items
        .map((item) => {
            if (item.type === 'link') {
                return item.label.toLowerCase().includes(lowerQuery) ? item : null;
            }
            if (item.type === 'category') {
                const filteredSubItems = filterSidebar(item.items, query);
                const labelMatches = item.label.toLowerCase().includes(lowerQuery);
                // Include category if its label matches OR it has matching children
                if (labelMatches || filteredSubItems.length > 0) {
                    return {
                        ...item,
                        items: filteredSubItems,
                        collapsed: false // Force open when search is active
                    };
                }
            }
            if (item.type === 'html') {
                return item.value.toLowerCase().includes(lowerQuery) ? item : null;
            }
            return null;
        })
        .filter((item): item is PropSidebarItem => item !== null);
}

export default function DocSidebarDesktopWrapper(props: Props): ReactNode {
    const [query, setQuery] = useState('');
    const { setSearchQuery } = useMobileSidebar();

    useEffect(() => {
        setSearchQuery(query.trim());
    }, [query, setSearchQuery]);

    const filteredSidebar = useMemo(() => {
        const trimmed = query.trim();
        if (!trimmed) return props.sidebar;
        return filterSidebar(props.sidebar, trimmed);
    }, [props.sidebar, query]);

    return (
        <div className={styles.sidebarContainer}>
            {/* Logo Header */}
            <div className={styles.sidebarHeader}>
                <a href="/" className={styles.logoLink} aria-label="Undang XYZ Home">
                    <img
                        src="/img/logo.png"
                        alt="Undang XYZ"
                        className={styles.logoImage}
                    />
                </a>
            </div>

            {/* Desktop Search Field - Moved after divider */}
            <div className={styles.searchWrap}>
                <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                    type="search"
                    className={styles.searchInput}
                    placeholder="Cari..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                    spellCheck={false}
                />
            </div>

            {/* Original Sidebar Content with dynamic content filtering */}
            <DocSidebarDesktop {...props} sidebar={filteredSidebar} />
        </div>
    );
}
