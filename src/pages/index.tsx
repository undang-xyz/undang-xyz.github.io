import React, { type ReactNode, useState, useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';
import { FaBook, FaChevronRight } from 'react-icons/fa';
import Link from '@docusaurus/Link';

// Load Docs Data Dynamically
// @ts-ignore
const docsReq = require.context(
  "@generated/docusaurus-plugin-content-docs/default/p",
  false,
  /docs-.*\.json$/
);
const allDocsData = docsReq.keys().map((key) => docsReq(key));
const currentDocs = allDocsData.find((d) => d?.version?.docsSidebars)?.version;
const sidebarItems = currentDocs?.docsSidebars?.tutorialSidebar || [];

// Filter to get only categories
const categories = sidebarItems.filter((item: any) => item.type === 'category');

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero')} style={{ minHeight: '45vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'transparent' }}>
      <div className="container">
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
          backdropFilter: 'blur(4px)',
          margin: '0 auto 1.5rem'
        }}>
          <FaBook size={14} />
          Documentation
        </div>
        <img
          src="img/logo.png"
          alt="Undang XYZ"
          style={{ height: '180px', marginBottom: '1.5rem', display: 'block', margin: '0 auto 1.5rem' }}
        />
        <p style={{ fontSize: '1.5rem', marginBottom: '3.5rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 3.5rem', lineHeight: 1.5, fontWeight: 500 }}>
          Pusat Bantuan & Dokumentasi
        </p>

        <div className="homepage-hero-search-container">
          <div className="homepage-search-wrapper">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}

function DocCard({ category }: { category: any }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card h-full" style={{
        padding: '2rem',
        borderRadius: '24px',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        backgroundColor: 'var(--card)',
        transition: 'all 0.3s ease'
      }}>
        <div className="card__header">
          <Heading as="h3" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
            {category.label}
          </Heading>
        </div>
        <div className="card__body" style={{ padding: 0 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {category.items.slice(0, 3).map((item: any, idx: number) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>
                <Link to={item.href} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--foreground)',
                  opacity: 0.8,
                  fontSize: '1rem',
                  textDecoration: 'none'
                }}>
                  <FaChevronRight size={10} style={{ opacity: 0.5 }} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="card__footer" style={{ marginTop: '1.5rem', padding: 0 }}>
          <Link
            to={category.href}
            className="button button--link button--md"
            style={{ padding: 0, display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}
          >
            Pelajari selengkapnya <FaChevronRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout>
      <Head>
        <title>Undang Knowledge Base</title>
      </Head>
      <div style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(143, 137, 76, 0.08) 0%, rgba(255, 255, 255, 0) 50%), var(--ifm-background-color)',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <HomepageHeader />
        <main style={{ paddingBottom: '4rem' }}>
          <section className="container">
            <div className="row">
              {categories.map((category: any, idx: number) => (
                <DocCard key={idx} category={category} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
