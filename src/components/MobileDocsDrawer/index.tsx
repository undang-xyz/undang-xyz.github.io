import React, { useState, useCallback, useEffect, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useMobileSidebar } from '@site/src/theme/SidebarContext';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FlatDoc {
    label: string;
    href: string;
    level: number;
}

interface MobileDocsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function flattenSidebarItems(items: readonly PropSidebarItem[], level = 0): FlatDoc[] {
    const result: FlatDoc[] = [];
    for (const item of items) {
        if (item.type === 'link') {
            result.push({ label: item.label, href: item.href, level });
        } else if (item.type === 'category') {
            if (item.href) {
                result.push({ label: item.label, href: item.href, level });
            } else {
                result.push({ label: item.label, href: '#', level });
            }
            if (item.items?.length) {
                result.push(...flattenSidebarItems(item.items, level + 1));
            }
        }
    }
    return result;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MobileDocsDrawer({ isOpen, onClose }: MobileDocsDrawerProps): ReactNode {
    const [query, setQuery] = useState('');
    const { items: contextItems } = useMobileSidebar();
    const allDocsData = useAllDocsData();

    // Close on Escape
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            setQuery('');
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Determine doc items to display
    let allDocs: FlatDoc[] = [];

    if (contextItems) {
        allDocs = flattenSidebarItems(contextItems);
    } else {
        // Fallback: list all docs from useAllDocsData
        const defaultPluginData = allDocsData['default'];
        if (defaultPluginData && defaultPluginData.versions.length > 0) {
            const latestVersion = defaultPluginData.versions[0];
            allDocs = latestVersion.docs.map(doc => ({
                label: doc.id === 'intro' ? 'Halaman Awal' : doc.id.split('/').pop()?.replace(/-/g, ' ') || doc.id,
                href: doc.path,
                level: 0
            }));
        }
    }

    const filtered = query.trim()
        ? allDocs.filter(d => d.label.toLowerCase().includes(query.toLowerCase()))
        : allDocs;

    const handleLinkClick = useCallback(() => {
        onClose();
    }, [onClose]);

    // We render even if closed to allow for CSS transitions, 
    // but only if the user has opened it once (lazy load) or just keep it simple.
    // For now, let's just make sure the 'mobile-drawer--open' class is applied.
    const drawerClass = `mobile-drawer${isOpen ? ' mobile-drawer--open' : ''}`;

    // Note: We still return null if not open to avoid unnecessary DOM on homepage
    // unless we want exit animations. For "aesthetics", entry animation is priority.
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="mobile-drawer-backdrop"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Drawer panel */}
            <div className={drawerClass} role="dialog" aria-modal="true" aria-label="Navigasi dokumen">
                <div className="mobile-drawer__glow" />

                {/* Dashboard Grid & Header integration */}
                <div className="mobile-drawer__scroll-container">
                    {/* Search / Command Bar at Top of Scroll */}
                    <div className="mobile-drawer__search-wrap">
                        <svg className="mobile-drawer__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <input
                            type="search"
                            className="mobile-drawer__search-input"
                            placeholder="Cari panduan..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            // eslint-disable-next-line jsx-a11y/no-autofocus
                            autoFocus
                            autoComplete="off"
                            spellCheck={false}
                        />
                        {query && (
                            <button
                                className="mobile-drawer__search-clear"
                                onClick={() => setQuery('')}
                                aria-label="Hapus pencarian"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Dashboard Grid */}
                    <nav className="mobile-drawer__list" aria-label="Daftar dokumen">
                        {filtered.length === 0 ? (
                            <div className="mobile-drawer__empty">Tidak ada menu ditemukan.</div>
                        ) : (
                            filtered.map((doc, i) => (
                                <Link
                                    key={i}
                                    to={doc.href}
                                    className={`mobile-drawer__item mobile-drawer__item--level${doc.level}`}
                                    onClick={handleLinkClick}
                                    style={{ animationDelay: `${(i + 2) * 0.05}s` }}
                                >
                                    <span className="mobile-drawer__item-label">{doc.label}</span>
                                </Link>
                            ))
                        )}
                    </nav>
                </div>

                {/* Close Button - Bottom Right Tab */}
                <button
                    className="mobile-drawer__close"
                    onClick={onClose}
                    aria-label="Tutup menu"
                >
                    Tutup
                </button>
            </div>
        </>
    );
}
