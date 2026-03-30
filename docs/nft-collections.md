---
id: nft-collections
title: NFT Collections
sidebar_position: 11
---
# NFT Collections

MAGMA has three distinct NFT collections on Solana. All use the Metaplex Core standard.

## Lava Tier Cards (MLAVA)

The primary collection. 10,000 total supply across five tiers. Holding a Lava Tier card applies a yield multiplier to backed narratives via MAX logic — the system always uses the higher of your earned Conviction Score multiplier or your NFT tier multiplier. They never stack additively.

| Tier | Supply | Yield Multiplier | Mint Price | Deposit Fee | Score Range |
|------|--------|-----------------|------------|-------------|-------------|
| Ember | 6,850 | 1.1× | 0.5 SOL | 2.0% | 0–99 |
| Flare | 2,500 | 1.3× | 1.5 SOL | 1.5% | 100–299 |
| Magma | 400 | 1.6× | 5.0 SOL | 1.5% | 300–599 |
| Core | 150 | 2.0× | 12.0 SOL | 1.0% | 600–899 |
| Volcanic | 100 | 2.5× | 25.0 SOL | Waived | 900+ |

**Important:** Ember tier grants 1.1× — not 1.0×. A wallet with no NFT held has a 1.0× baseline, which is different from and lower than Ember.

Secondary market royalty: 10% on all MLAVA sales, flowing to the protocol treasury to amplify the Echo Pool.

## Genesis Origin Card (MGNSS)

A commemorative collection of 100 cards distributed exclusively through the Galxe campaign raffle at campaign close. The Genesis Origin Card is not for direct purchase or mint.

**The only benefit:** 1.1× Echo Pool weight. This affects how much of the Echo Pool a wallet receives at epoch distribution — it does not affect yield multipliers on narrative backings.

Genesis cards do not stack with Lava Tier cards. They operate on a separate benefit track (Echo Pool weight only) and never interact with the yield multiplier system.

Royalty: 0%.

## Special Edition (MSPEC)

Five commemorative cards with zero protocol utility. These cards are purely collectible — holding one provides no yield benefit, no multiplier, no fee reduction, and no Echo Pool advantage. Holders may sell on secondary markets.

Royalty: TBD.

## Multiplier Rules

```
total_yield_multiplier = MAX(conviction_score_multiplier, mlava_multiplier)
```

- Never multiply the two values together
- Never add them together
- Genesis (MGNSS) and Special Edition (MSPEC) never affect this calculation
- SKR Guardian wallets always receive 0% deposit fee regardless of NFT tier
