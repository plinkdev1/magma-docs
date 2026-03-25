---
id: ybncm
title: Yield-Bearing Narrative Capital Markets
sidebar_position: 3
---

# Yield-Bearing Narrative Capital Markets


## 3.1 Formal Definition


A Yield-Bearing Narrative Capital Market (YBNCM) is a financial system with the following components:

- A narrative n defined by a natural-language claim C, a resolution criterion R, and a deadline T.
- A backing pool B = {(wᵢ, sᵢ, tᵢ)} where wᵢ is a participant wallet, sᵢ is the committed amount, and tᵢ is the time of commitment.
- A yield function Y(sᵢ, tᵢ, T) representing the yield earned on sᵢ committed at tᵢ and redeemed at T, computed from the receipt token's exchange rate.
- A multiplier function M(wᵢ, tᵢ, T) representing the participant's combined yield multiplier at resolution time.
- An oracle O: n → {TRUE, FALSE, REFUND} resolving the narrative at or after T.
- A distribution function D allocating capital and yield based on oracle output.

## 3.2 Distribution Rules


On TRUE resolution


The narrative claim is confirmed accurate. For each participant wᵢ:


payout(wᵢ) = sᵢ + Y(sᵢ, tᵢ, T) × M(wᵢ, tᵢ, T)


Protocol fee (2%) and creator share (0–2%, based on Creator Score) are deducted from the pool before distribution. The multiplier M applies to the yield portion only — principal is always returned at 1:1 regardless of multiplier tier.


On FALSE resolution


The narrative claim is disconfirmed. Principal is distributed as follows:

- 40% → Protocol treasury
- 35% → Echo Pool (epoch redistribution to correct participants)
- 15% → Creator Reward Pool
- 10% → Discovery Bonus Pool (top early backers)

On REFUND


The oracle cannot reach a determination. 100% of principal is returned to all participants. Proportional yield earned during the commitment period is also distributed. No fees apply.


## 3.3 The Receipt Token Mechanism


When a participant commits capital to a YBNCM backing pool, the capital is not held idle in the vault. Instead, the vault deposits it into the appropriate lending protocol and receives a yield-bearing receipt token in exchange. For Solana deployments, this means:

- SOL deposits → routed to Kamino Finance or Jito Staking
- JUP deposits → routed to Jupiter Lend (powered by Fluid)
- USDC deposits → routed to Kamino Lend or Save Finance
- SKR deposits → routed to Guardian staking

The vault records the receipt token amount and the exchange rate at deposit time. At resolution, the vault redeems the receipt and computes yield precisely:


yield = (redemption_rate / deposit_rate × sᵢ) − sᵢ


This computation is exact — not estimated from APY snapshots — because it uses the actual exchange rates at the two moments in time. The yield is then multiplied by M(wᵢ, tᵢ, T) and distributed to the participant.
