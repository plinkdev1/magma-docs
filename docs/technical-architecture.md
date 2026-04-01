---
id: technical-architecture
title: Technical Architecture
sidebar_position: 10
---

# Technical Architecture


## 10.1 Smart Contract Layer


MAGMA Protocol is implemented on Solana using the Anchor framework. The primary program manages capital custody, oracle authority, payout logic, and the challenge system.


Program ID (devnet): ExNf7ktskoFCKwneF4239WKt3JsrYYTPDszgJSitc2Vb


Core program accounts:

- ProgramState: global configuration, oracle authority, treasury wallet, protocol fee basis points.
- NarrativeVault: per-narrative account tracking total backed, backer count, oracle status, and DeFi receipt position.
- BackingRecord: per-backer-per-narrative account tracking amount, token type, discovery multiplier, conviction multiplier, and yield receipt data.

Capital flows:

- TRUE resolution: 2% fee to treasury, 0–2% creator share, remainder plus multiplied yield to backers.
- FALSE resolution: 40% treasury, 35% Echo Pool, 15% Creator Pool, 10% Discovery Pool.
- REFUND: 100% to backers, 0% fee, proportional yield distributed.

## 10.2 Oracle Backend


The oracle backend is a Node.js/TypeScript service managing multi-source queries, weighted consensus computation, and resolution instruction signing. It runs on Railway with Redis state management and BullMQ job queuing across five worker queues managing narrative processing, oracle queries and weighted consensus, social publishing, DeFi yield monitoring, and Echo Pool operations.


## 10.3 Mobile Application


The MAGMA mobile application is built with React Native and Expo, targeting Solana Mobile hardware — the Seeker phone and Samsung A55. Wallet integration uses Solana Mobile Wallet Adapter v2, supporting Phantom, Solflare, and Jupiter wallets. Anti-Sybil verification uses Civic Auth and Gitcoin Passport.


Sixteen backing tokens are supported, each routed to its optimal yield protocol via the yield router service. Voice submission uses Whisper transcription piped through Claude Sonnet for narrative structuring. The Conviction Score, Echo Pool positions, and Discovery window status are all surfaced in the application's profile and backing interfaces.


## 10.4 Privacy Layer


Post-mainnet, MAGMA will integrate Arcium's confidential SPL token (C-SPL) standard for encrypted position sizes. Participants who require position privacy — particularly institutional participants — will be able to back narratives with C-SOL, an encrypted variant that does not reveal the backing amount on-chain. Governance participation through C-$MAGMA maintains the same voting weight as standard $MAGMA while concealing the vote and holding size.
