import React from 'react';
import { useHistory, useLocation } from '@docusaurus/router';

interface WizardNavigationProps {
    stepKey?: string;
    back?: string;
    backLabel?: string;
    next?: string;
    nextLabel?: string;
}

export default function WizardNavigation({
    stepKey = 'step',
    back,
    backLabel = 'Sebelumnya',
    next,
    nextLabel = 'Selanjutnya',
}: WizardNavigationProps) {
    const history = useHistory();
    const location = useLocation();

    const handleTabChange = (value: string) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set(stepKey, value);
        history.push({
            pathname: location.pathname,
            search: searchParams.toString(),
            hash: location.hash,
        });

        // Small delay to allow tab to switch before scrolling
        setTimeout(() => {
            const tabsContainer = document.querySelector('.tabs-container');
            if (tabsContainer) {
                const headerOffset = 100;
                const elementPosition = tabsContainer.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

    return (
        <div className="wizard-nav" style={{
            display: 'flex',
            justifyContent: back ? 'space-between' : 'flex-end',
            marginTop: '2.5rem',
            marginBottom: '1rem',
            gap: '1rem',
            borderTop: '1px solid var(--ifm-color-emphasis-200)',
            paddingTop: '1.5rem'
        }}>
            {back && (
                <button
                    className="button button--secondary button--outline"
                    onClick={() => handleTabChange(back)}
                    type="button"
                >
                    ← {backLabel}
                </button>
            )}
            {next && (
                <button
                    className="button button--primary"
                    onClick={() => handleTabChange(next)}
                    type="button"
                >
                    {nextLabel} →
                </button>
            )}
        </div>
    );
}
