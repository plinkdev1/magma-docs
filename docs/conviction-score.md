---
id: conviction-score
title: Conviction Score
sidebar_position: 4
---

# Conviction Score


## 4.1 Mechanism


The Conviction Score is a non-transferable on-chain reputation metric tracked per wallet. It represents the accumulated evidence of a participant's prediction accuracy over time. The score is maintained by the MAGMA oracle program and updated automatically after each narrative resolution.


Score update rules:

- +10 points per correct backing (narrative resolves TRUE and wallet backed it)
- −5 points per incorrect backing (narrative resolves FALSE and wallet backed it)
- +3 points for early backing (commitment in the first 20% of narrative's time window)
- +2 points for backing undiscovered narratives (pool size < 10 SOL at commitment time)
- −1% per month of inactivity (decay, floors at 0, never goes negative)
- Cap at 1,000 points

## 4.2 Tier System


The Conviction Score maps to five tiers, each unlocking progressively greater yield multipliers:

- Ember (0–99): 1.1× yield multiplier, 2% protocol fee
- Flare (100–299): 1.3× yield multiplier, 1.5% protocol fee
- Magma (300–599): 1.6× yield multiplier, 1.5% protocol fee
- Core (600–899): 2.0× yield multiplier, 1.0% protocol fee
- Volcanic (900–1000): 2.5× yield multiplier, 0% fee (waived)

A Volcanic-tier participant who commits 10 SOL to a 90-day narrative earning 7.2% annualized yield:


base yield: 0.18 SOL  ×  2.5 multiplier  =  0.45 SOL yield


Compared to an Ember-tier participant on the same narrative:


base yield: 0.18 SOL  ×  1.1 multiplier  =  0.198 SOL yield


The multiplier difference compounds across all positions over time. A participant who reaches Volcanic tier through consistent accuracy is materially better off than a new entrant on every future position they take.


## 4.3 NFT Shortcut


Participants who wish to access tier multipliers without building their score over time may purchase MAGMA NFTs. Each NFT tier grants the corresponding Conviction Score tier's multiplier immediately. The system always applies the maximum of the NFT tier and the earned score — a participant who has earned a higher score than their NFT tier receives the earned score's multiplier, not the NFT tier's. NFT ownership never penalizes earned status.


The key distinction: the NFT buys the financial benefit. The earned score buys social capital. High-scored wallets are visible on leaderboards and attract larger backing pools to narratives they submit, because the market recognizes their track record. An NFT cannot replicate this reputational signal.


## 4.4 Retention Properties


The Conviction Score creates switching costs that are asymmetric and non-replicable. A Core-tier participant (600+ score, 2.0× multiplier, 1% fee) has accumulated this status through months of accurate predictions. Any competing platform would require starting from zero. The 1% monthly inactivity decay slows but does not eliminate this advantage — a participant who leaves for three months retains approximately 97% of their score.


This creates a retention distribution strongly skewed toward long-tenure participants. The highest-value users — those with the best prediction accuracy and the largest backing positions — have the strongest incentive to stay.
