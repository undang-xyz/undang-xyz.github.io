import React, { useState, useCallback, useEffect, type ReactNode } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import Head from '@docusaurus/Head';
import { useColorMode } from '@docusaurus/theme-common';
import { FaSun, FaMoon } from 'react-icons/fa';
import MobileDocsDrawer from '@site/src/components/MobileDocsDrawer';
import { SidebarProvider } from '@site/src/theme/SidebarContext';
import { PublicMobileNav } from '@site/src/components/PublicMobileNav';

// ─── ThemeSwitcher (desktop only) ────────────────────────────────────────────

function ThemeSwitcher() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <div className="theme-switcher-fixed">
      <button
        onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
        className="theme-toggle-button"
        title="Toggle Theme"
      >
        {colorMode === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
}

// ─── Mobile Bottom Nav ────────────────────────────────────────────────────────


// ─── Layout Wrapper ───────────────────────────────────────────────────────────

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props & { children?: ReactNode }): ReactNode {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/') || location.pathname === '';
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen(prev => !prev), []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.add('docs-page');
    return () => {
      document.body.classList.remove('docs-page');
    };
  }, []);

  return (
    <SidebarProvider>
      <Layout {...props}>
        {/* Theme switcher (Desktop) */}
        <ThemeSwitcher />

        {/* Public Mobile Nav (Bottom Bar & More Menu) */}
        <PublicMobileNav onSearchClick={openDrawer} />

        {/* Mobile docs drawer (can still be used if needed, or replaced by PublicMobileNav overlay) */}
        <MobileDocsDrawer isOpen={drawerOpen} onClose={closeDrawer} />

        {props.children}
      </Layout>
    </SidebarProvider>
  );
}
