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

// ─── ThemeSwitcher (desktop only) ────────────────────────────────────────────

function ThemeSwitcher({ onMenuClick, isDocsPage }: { onMenuClick: () => void; isDocsPage: boolean }) {
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

      {/* Menu toggler only visible on mobile via CSS */}
      <button
        onClick={onMenuClick}
        className="mobile-menu-toggler"
        title="Toggle Menu"
        aria-label="Toggle Menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </div>
  );
}

// ─── Mobile Bottom Nav ────────────────────────────────────────────────────────

interface MobileBottomNavProps {
  onHamburgerClick: () => void;
  isDrawerOpen: boolean;
}

function MobileBottomNav({ onHamburgerClick, isDrawerOpen }: MobileBottomNavProps) {
  return (
    <nav className="mobile-bottom-nav" aria-label="Navigasi utama">
      {/* Left: Logo */}
      <a href="/" className="mobile-bottom-nav__logo-link" aria-label="Beranda">
        <img src="/img/logo.png" alt="Undang XYZ" className="mobile-bottom-nav__logo" />
      </a>

      {/* Center: Read Docs button with icon */}
      <a href="/docs" className="mobile-bottom-nav__button-center">
        <svg style={{ marginRight: '10px', opacity: 0.8 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1' }}>
          <span style={{ fontSize: '0.65rem', opacity: 0.8, fontWeight: 800, letterSpacing: '0.12em' }}>BACA</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 900, letterSpacing: '0.04em' }}>PANDUAN</span>
        </div>
      </a>

      {/* Right: Hamburger */}
      <button
        className={`mobile-bottom-nav__hamburger${isDrawerOpen ? ' mobile-bottom-nav__hamburger--active' : ''}`}
        onClick={onHamburgerClick}
        aria-label={isDrawerOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={isDrawerOpen}
      >
        {isDrawerOpen ? (
          /* X icon when open */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        )}
      </button>
    </nav>
  );
}

// ─── Layout Wrapper ───────────────────────────────────────────────────────────

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props & { children?: ReactNode }): ReactNode {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');
  const isHomepage = location.pathname === '/';
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen(prev => !prev), []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDocsPage) {
      document.body.classList.add('docs-page');
    } else {
      document.body.classList.remove('docs-page');
    }

    if (isHomepage) {
      document.body.classList.add('homepage-view');
    } else {
      document.body.classList.remove('homepage-view');
    }

    return () => {
      document.body.classList.remove('docs-page');
      document.body.classList.remove('homepage-view');
    };
  }, [isDocsPage, isHomepage]);

  return (
    <SidebarProvider>
      <Layout {...props}>
        {/* Theme switcher and mobile menu toggle */}
        <ThemeSwitcher onMenuClick={toggleDrawer} isDocsPage={isDocsPage} />

        {/* Mobile docs drawer (only renders when applicable) */}
        <MobileDocsDrawer isOpen={drawerOpen} onClose={closeDrawer} />

        {isHomepage && (
          <Head>
            <style>{`
              .navbar, .announcementBar { 
                display: none !important; 
                visibility: hidden !important;
                height: 0 !important;
                pointer-events: none !important;
              }
            `}</style>
          </Head>
        )}
        {props.children}
      </Layout>
    </SidebarProvider>
  );
}
