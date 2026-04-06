import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import {
    Home,
    X,
    Moon,
    Sun,
    AlignRight,
    LogIn,
    LayoutTemplate,
    UserPlus,
    Search,
    Key,
    CreditCard,
    Book
} from 'lucide-react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

interface PublicMobileNavProps {
    brandName?: string;
    brandLogo?: string;
    brandLogoSize?: string;
    onSearchClick?: () => void;
}

export function PublicMobileNav({
    brandName = "Undang XYZ",
    brandLogo = "/img/logo.png",
    brandLogoSize = "65",
    onSearchClick,
}: PublicMobileNavProps) {
    const location = useLocation();
    const pathname = location.pathname;
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const { colorMode, setColorMode } = useColorMode();

    // Scroll lock
    useEffect(() => {
        if (isMoreOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMoreOpen]);

    const isHome = pathname === '/' || pathname === '';

    return (
        <div className="public-mobile-nav-container">
            {/* Mobile Bottom Bar */}
            <div className="public-mobile-bottom-bar">
                <div className="public-mobile-bottom-bar__inner">
                    {/* Left: Home/Logo */}
                    <div className="public-mobile-bottom-bar__section">
                        <Link
                            to="https://undang.xyz"
                            className={clsx(
                                "public-mobile-bottom-bar__link",
                                isHome ? "active" : "inactive"
                            )}
                        >
                            <div className="public-mobile-bottom-bar__logo-wrapper">
                                <img
                                    src={brandLogo}
                                    alt={brandName}
                                    style={{ height: `${Math.min(parseInt(brandLogoSize), 40)}px` }}
                                    className="public-mobile-bottom-bar__logo"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Center: Main Action (Search Docs) */}
                    <div className="public-mobile-bottom-bar__section">
                        <button
                            onClick={onSearchClick}
                            className="public-mobile-bottom-bar__action-button"
                        >
                            <Search size={20} strokeWidth={2.5} />
                            <div className="public-mobile-bottom-bar__action-label">
                                <span className="text-top">CARI</span>
                                <span className="text-bottom">PANDUAN</span>
                            </div>
                        </button>
                    </div>

                    {/* Right: Login and More */}
                    <div className="public-mobile-bottom-bar__section right">
                        <div className="public-mobile-bottom-bar__login-wrapper">
                            <Link
                                to="https://undang.xyz/login"
                                className="public-mobile-bottom-bar__icon-link"
                            >
                                <LogIn size={24} strokeWidth={2} />
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsMoreOpen(true)}
                            className={clsx(
                                "public-mobile-bottom-bar__more-toggle",
                                isMoreOpen ? "active" : ""
                            )}
                        >
                            <AlignRight size={26} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>

            {/* More Menu Overlay */}
            {isMoreOpen && (
                <div className="public-mobile-more-overlay animate-in fade-in slide-in-from-bottom">
                    {/* Logo at Top Center */}
                    <div className="public-mobile-more-overlay__header">
                        <div className="public-mobile-more-overlay__logo-wrapper">
                            <img
                                src={brandLogo}
                                alt={brandName}
                                style={{ height: `${parseInt(brandLogoSize) * 2}px` }}
                                className="public-mobile-more-overlay__logo"
                            />
                        </div>
                    </div>

                    {/* Search (Triggers documentation search drawer) */}
                    <div
                        className="public-mobile-more-overlay__search"
                        onClick={() => {
                            setIsMoreOpen(false);
                            onSearchClick?.();
                        }}
                    >
                        <div className="public-mobile-more-overlay__search-inner">
                            <Search size={16} className="public-mobile-more-overlay__search-icon" />
                            <input
                                type="text"
                                placeholder="Cari menu..."
                                readOnly
                                className="public-mobile-more-overlay__search-input clickable"
                            />
                        </div>
                    </div>

                    {/* Menu Items Grid */}
                    <div className="public-mobile-more-overlay__content">
                        <div className="public-mobile-more-overlay__grid">
                            <Link
                                to="https://undang.xyz"
                                onClick={() => setIsMoreOpen(false)}
                                className="public-mobile-more-overlay__grid-item"
                            >
                                <Home size={24} />
                                <span>Beranda</span>
                            </Link>

                            <Link
                                to="https://undang.xyz/pricing"
                                onClick={() => setIsMoreOpen(false)}
                                className="public-mobile-more-overlay__grid-item"
                            >
                                <CreditCard size={24} />
                                <span>Harga</span>
                            </Link>

                            <Link
                                to="/"
                                onClick={() => setIsMoreOpen(false)}
                                className={clsx(
                                    "public-mobile-more-overlay__grid-item",
                                    pathname.startsWith('/') ? "active" : ""
                                )}
                            >
                                <Book size={24} />
                                <span>Panduan</span>
                            </Link>

                            <Link
                                to="https://undang.xyz/templates"
                                onClick={() => setIsMoreOpen(false)}
                                className="public-mobile-more-overlay__grid-item"
                            >
                                <LayoutTemplate size={24} />
                                <span>Template</span>
                            </Link>

                            <Link
                                to="https://undang.xyz/login"
                                onClick={() => setIsMoreOpen(false)}
                                className="public-mobile-more-overlay__grid-item"
                            >
                                <LogIn size={24} />
                                <span>Masuk</span>
                            </Link>

                            <Link
                                to="https://undang.xyz/register"
                                onClick={() => setIsMoreOpen(false)}
                                className="public-mobile-more-overlay__grid-item"
                            >
                                <UserPlus size={24} />
                                <span>Daftar</span>
                            </Link>

                            <Link
                                to="https://undang.xyz/forgot-password"
                                onClick={() => setIsMoreOpen(false)}
                                className="public-mobile-more-overlay__grid-item"
                            >
                                <Key size={24} />
                                <span>Lupa Sandi</span>
                            </Link>
                        </div>

                        {/* Appearance / Settings Section */}
                        <div className="public-mobile-more-overlay__settings">
                            <button
                                onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                                className="public-mobile-more-overlay__settings-button"
                            >
                                <div className="public-mobile-more-overlay__settings-left">
                                    <div className="public-mobile-more-overlay__theme-icon">
                                        {colorMode === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                                    </div>
                                    <span>Tema: {colorMode === 'dark' ? 'Gelap' : 'Terang'}</span>
                                </div>
                                <div className="public-mobile-more-overlay__toggle-track">
                                    <div className={clsx("public-mobile-more-overlay__toggle-thumb", colorMode === 'dark' ? "dark" : "")} />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Floating Close Button */}
                    <div className="public-mobile-more-overlay__footer">
                        <button
                            onClick={() => setIsMoreOpen(false)}
                            className="public-mobile-more-overlay__close-button"
                        >
                            <span>Tutup</span>
                            <X size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
