import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Yield-Bearing Narrative Capital Markets — technical documentation for MAGMA Protocol">
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <img src="/img/logo.png" alt="MAGMA" className={styles.heroLogo} />
            <div className={styles.heroBadge}>DOCUMENTATION</div>
            <h1 className={styles.heroTitle}>MAGMA Protocol</h1>
            <p className={styles.heroSub}>
              Yield-Bearing Narrative Capital Markets — technical reference,<br />
              protocol specification, and API documentation.
            </p>
            <div className={styles.heroCtas}>
              <Link className={styles.ctaPrimary} to="/introduction">
                Get Started →
              </Link>
              <Link className={styles.ctaSecondary} to="/api-reference">
                API Reference
              </Link>
              <Link className={styles.ctaSecondary} href="https://magmaprotocol.xyz/whitepaper">
                Whitepaper ↗
              </Link>
            </div>
          </div>
        </section>

        {/* Quick nav cards */}
        <section className={styles.cards}>
          <div className={styles.cardsGrid}>
            {[
              {
                icon: '⬡',
                title: 'Introduction',
                desc: 'What is MAGMA Protocol and how Yield-Bearing Narrative Capital Markets work.',
                href: '/introduction',
              },
              {
                icon: '◎',
                title: 'Conviction Score',
                desc: 'The on-chain reputation system that compounds your yield multiplier over time.',
                href: '/conviction-score',
              },
              {
                icon: '◈',
                title: 'Echo Pool',
                desc: 'Monthly redistribution of incorrect backers capital to correct ones.',
                href: '/echo-pool',
              },
              {
                icon: '◉',
                title: 'Oracle Architecture',
                desc: 'Multi-source weighted resolution system for Standard and Consensus oracles.',
                href: '/oracle-architecture',
              },
              {
                icon: '◆',
                title: 'Token Economics',
                desc: '$MAGMA tokenomics, staking tiers, revenue share, and TGE conditions.',
                href: '/token-economics',
              },
              {
                icon: '⚡',
                title: 'Quickstart Guide',
                desc: 'Get started with MAGMA Protocol in under 5 minutes — connect, back, earn.',
                href: '/quickstart',
              },
              {
                icon: '🔥',
                title: 'NFT Collections',
                desc: 'MLAVA tier cards, multipliers, Genesis raffle, and Special Edition details.',
                href: '/nft-collections',
              },
              {
                icon: '⟨/⟩',
                title: 'AI Agents API',
                desc: 'API endpoints, authentication, rate limits, and tier documentation for agents.',
                href: '/api-agents',
              },
              {
                icon: '⦿',
                title: 'Brand & Assets',
                desc: 'Logos, icons, colors, and typography guidelines for integrations and press.',
                href: '/brand-assets',
              },
              {
                icon: '⟨/⟩',
                title: 'API Reference',
                desc: 'REST API endpoints, TypeScript SDK, webhooks, and authentication.',
                href: '/api-reference',
              },
            ].map((card) => (
              <Link key={card.title} to={card.href} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardDesc}>{card.desc}</div>
                <div className={styles.cardArrow}>→</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className={styles.stats}>
          {[
            { value: '16', label: 'Doc Sections' },
            { value: '14', label: 'Whitepaper Chapters' },
            { value: 'REST', label: 'API Type' },
            { value: 'Solana', label: 'Network' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </section>

      </main>
    </Layout>
  );
}
