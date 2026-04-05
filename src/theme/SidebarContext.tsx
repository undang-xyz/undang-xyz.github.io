import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';

type SidebarContextValue = {
    items: readonly PropSidebarItem[] | null;
    setItems: (items: readonly PropSidebarItem[]) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [items, setItemsState] = useState<readonly PropSidebarItem[] | null>(null);
    const [searchQuery, setSearchQueryState] = useState('');

    const setItems = useCallback((newItems: readonly PropSidebarItem[]) => {
        setItemsState(newItems);
    }, []);

    const setSearchQuery = useCallback((query: string) => {
        setSearchQueryState(query);
    }, []);

    return (
        <SidebarContext.Provider value={{ items, setItems, searchQuery, setSearchQuery }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useMobileSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useMobileSidebar must be used within a SidebarProvider');
    }
    return context;
}
