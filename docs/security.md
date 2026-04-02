---
id: security
title: Security
sidebar_position: 11
---

# Security

MAGMA Protocol is built with security as a foundational concern, not an afterthought. This page describes the security model, audit status, and responsible disclosure process.

---

## Security Model

MAGMA Protocol operates across three layers: an on-chain Solana program written in Anchor/Rust, a backend API layer, and a decentralized oracle network. Each layer has independent security controls.

### On-chain program

The MAGMA Anchor/Rust program enforces all critical protocol logic on-chain. No backend system can override or bypass on-chain state. Key design decisions:

- All account ownership and authorization checks are enforced at the program level
- All arithmetic operations use checked math — overflow and underflow are explicitly handled
- Program Derived Addresses (PDAs) are constructed with collision-resistant seed derivation
- Cross-program invocations (CPIs) validate all accounts before execution
- Initialization guards prevent re-initialization attacks on existing accounts

### Oracle architecture

Narrative resolution uses a redundant oracle stack. No single oracle source determines an outcome unilaterally. Resolution criteria are validated at narrative submission time — qualitative or unmeasurable criteria are rejected. Every narrative must specify a numeric threshold and a named, verifiable data source. Oracle responses are cryptographically verified before use.

### Backend and infrastructure

- Rate limiting applied globally across all endpoints, with per-route overrides for sensitive operations
- All database queries use parameterized inputs — no string concatenation in query construction
- Row-level security enforced at the database layer independently of application logic
- Admin credentials are cryptographically random, rotated on a scheduled basis, and IP-restricted
- Job queue operations on shared state use advisory locks to prevent race conditions

### Sybil resistance

- Conviction score awards include a difficulty multiplier — near-certain outcomes yield proportionally lower scores, making certainty farming economically unviable
- Echo Pool multipliers above the base tier require verified wallet age and on-chain activity history
- Correlated wallet behavior is detected and flagged
- Narrative submission requires identity verification to prevent automated spam at scale

---

## Audit Status

MAGMA Protocol's Anchor/Rust program undergoes independent security audit before each major release. Audit reports are published here upon completion.

| Scope | Auditor | Status | Report |
|---|---|---|---|
| Anchor/Rust program (full) | TBD — Solana-specialist firm | Pre-testnet | Will be published |
| Backend API security | Internal review | Ongoing | Internal |
| Oracle aggregation logic | Internal review + adversarial simulation | Complete | Internal |

We conduct adversarial design reviews prior to each testnet launch. All issues identified in pre-testnet reviews are resolved before external participants are onboarded.

---

## Bug Bounty

MAGMA Protocol operates an active bug bounty program. We reward responsible disclosure of security vulnerabilities.

**How to report:**

Send a description of the vulnerability to **magma@exidante.xyz** with the subject line `[SECURITY]`. Include:

- A description of the vulnerability and the affected component
- Steps to reproduce (if applicable)
- The potential impact in your assessment
- Your wallet address for reward payment

**Response commitment:**

- Acknowledgement within 24 hours
- Initial assessment within 72 hours
- Resolution timeline communicated within 7 days

**Severity and rewards:**

| Severity | Description | Reward |
|---|---|---|
| Critical | Funds at risk, protocol halt, unauthorized state manipulation | Up to 50,000 MAGMA |
| High | Score manipulation, Echo Pool extraction, Sybil bypass | Up to 20,000 MAGMA |
| Medium | Rate limit bypass, minor data exposure, UI manipulation | Up to 5,000 MAGMA |
| Low | Informational, non-exploitable findings | Acknowledged |

**Responsible disclosure policy:**

Please do not publish vulnerability details publicly before we have had a reasonable opportunity to investigate and resolve the issue. We commit to resolving critical and high severity issues within 30 days of confirmed receipt.

---

## Scope

**In scope:**

- MAGMA Protocol Anchor/Rust program (mainnet program ID published at launch)
- Backend API endpoints at api.magmaprotocol.xyz
- Oracle aggregation and resolution logic
- Conviction score calculation and Echo Pool distribution
- Waitlist and airdrop mechanics

**Out of scope:**

- Third-party services (Solana network, Pyth, Switchboard, Grok, Tavily, Supabase, Railway)
- Social engineering attacks against team members
- Denial of service attacks against infrastructure
- Vulnerabilities in wallets used to interact with the protocol

---

## Security Contact

For security issues: **magma@exidante.xyz**

For general questions: [Discord](https://discord.gg/magma) · [Telegram](https://t.me/magmaprotocol)

MAGMA Protocol is developed by ExiDante Corp, a Cayman Islands Segregated Portfolio Company.
