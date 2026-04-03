import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { FaRocket, FaBook, FaCode } from 'react-icons/fa';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, 'bg-tech')} style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated Blobs */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6" style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '24px',
              backgroundColor: 'rgba(143, 137, 76, 0.1)',
              color: 'oklch(0.50 0.12 145)',
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              border: '1px solid rgba(143, 137, 76, 0.2)',
              backdropFilter: 'blur(4px)'
            }}>
              <FaBook size={14} />
              Documentation & Blog
            </div>
            <Heading as="h1" className="hero__title" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              <span className="gradient-text">Undang XYZ</span>
            </Heading>
            <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', lineHeight: 1.5, fontWeight: 500 }}>
              Instant Digital Invitation
            </p>


            <div className={styles.buttons} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              <a
                className="button button--primary button--lg"
                href="/docs/intro"
                style={{ padding: '1rem 3rem', borderRadius: '16px', fontSize: '1.2rem', fontWeight: 800, boxShadow: '0 10px 25px -5px var(--primary)' }}>
                Dokumentasi
              </a>
              <a
                className="button button--outline button--primary button--lg"
                href="/blog"
                style={{ padding: '1rem 3rem', borderRadius: '16px', fontSize: '1.2rem', fontWeight: 800 }}>
                Blog
              </a>
            </div>
          </div>

          <div className="col col--6">
            <div className="glass-card" style={{ padding: '1rem', rotate: '2deg' }}>
              <img
                src="img/hero-modern.png"
                alt="Modern Digital Invitation"
                style={{ borderRadius: '2rem', width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureItem({ title, description, icon }: { title: string, description: string, icon: ReactNode }) {
  return (
    <div className="glass-card h-full" style={{ padding: '2.5rem' }}>
      <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(var(--primary-rgb), 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
        {icon}
      </div>
      <Heading as="h3" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>{title}</Heading>
      <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{description}</p>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}
