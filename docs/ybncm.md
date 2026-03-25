---
id: ybncm
title: "Yield-Bearing Narrative Capital Markets"
sidebar_position: 3
---

# Yield-Bearing Narrative Capital Markets

## 3.1 Formal Definition

A Yield-Bearing Narrative Capital Market (YBNCM) is a protocol in which participants commit capital to directional claims about real-world outcomes, and that capital earns yield in decentralized finance protocols throughout the commitment period.

A narrative N consists of:

- A claim string describing a real-world outcome
- A resolution time T at which an oracle evaluates the claim
- A backing pool of participant wallets, committed amounts, and commitment timestamps
- A yield function representing yield earned on committed capital from deposit to resolution
- A multiplier function representing each participant's combined yield multiplier at resolution
- An oracle function resolving the narrative to TRUE, FALSE, or REFUND at or after T

## 3.2 Distribution Rules

**On TRUE resolution:** Each correct participant receives principal plus yield multiplied by their conviction and discovery multipliers. Protocol fee (2%) and creator share (0-2%) are deducted before distribution. The multiplier applies to yield only -- principal is always returned 1:1.

**On FALSE resolution:** Principal is forfeited. Capital is distributed as follows:

- 40% to Protocol treasury
- 35% to Echo Pool (epoch redistribution to correct participants)
- 15% to Creator Reward Pool
- 10% to Discovery Bonus Pool (top early backers)

**On REFUND:** All participants receive their principal back. Yield is distributed pro-rata based on time committed.

## 3.3 The Receipt Token Mechanism

The yield-bearing property is implemented through receipt tokens. When MAGMA routes committed capital into a DeFi yield protocol, the protocol returns a yield-bearing receipt token representing the deposited capital plus accrued interest.

Yield routing by token type:

- SOL deposits: routed to Kamino Finance or Jito Staking
- JUP deposits: routed to Jupiter Lend (powered by Fluid)
- USDC deposits: routed to Kamino Lend or Save Finance
- SKR deposits: routed to Guardian staking
- All other tokens: routed to the highest-APY available protocol at time of deposit

The yield computation is exact, not estimated from APY snapshots. It uses the actual exchange rate of the receipt token at deposit time versus redemption time. The result is multiplied by the participant's combined multiplier and distributed at resolution.

This mechanism -- holding receipt tokens as vault collateral rather than the underlying capital itself -- is what enables yield to accrue continuously without liquidity mismatch risk. The receipt is redeemable at any time; the underlying capital earns yield; at resolution, the receipt is redeemed and obligations are met from the underlying pool.
