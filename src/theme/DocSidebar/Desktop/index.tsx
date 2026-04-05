import React, { type ReactNode } from 'react';
import DocSidebarDesktop from '@theme-original/DocSidebar/Desktop';
import type DocSidebarDesktopType from '@theme/DocSidebar/Desktop';
import type { WrapperProps } from '@docusaurus/types';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocSidebarDesktopType>;

export default function DocSidebarDesktopWrapper(props: Props): ReactNode {
    return (
        <div className={styles.sidebarContainer}>
            {/* Logo & Search Header */}
            <div className={styles.sidebarHeader}>
                <a href="/" className={styles.logoLink} aria-label="Undang XYZ Home">
                    <img
                        src="/img/logo.png"
                        alt="Undang XYZ"
                        className={styles.logoImage}
                    />
                </a>
            </div>

            {/* Original Sidebar Content */}
            <DocSidebarDesktop {...props} />
        </div>
    );
}
