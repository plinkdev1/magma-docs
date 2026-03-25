---
id: discovery-multiplier
title: Discovery Multiplier
sidebar_position: 5
---

# Discovery Multiplier


## 5.1 Mechanism


Prediction markets suffer from a coordination problem in early markets: rational participants prefer to wait and observe before committing, because early commitment is riskier and provides no additional reward. This produces thin early markets with noisy price signals and delayed liquidity.


The Discovery Multiplier addresses this directly by making early commitment financially rewarding. The multiplier is determined by the participant's position in the narrative's time window at the moment of commitment:

- First 10% of time window: 2.0× Discovery Multiplier on yield
- First 25% of time window: 1.5× Discovery Multiplier
- First 50% of time window: 1.2× Discovery Multiplier
- After 50% of time window: 1.0× (no discovery bonus)

The discovery window is computed from the narrative's creation timestamp and deadline, not from the current backing pool size. This prevents manipulation: a participant cannot delay commitment to appear early by waiting for a thin pool.


## 5.2 Combined Multiplier


The Conviction Score multiplier and Discovery Multiplier are multiplicative. A Volcanic-tier participant who commits in the first 10% of the window:


combined multiplier = 2.5 (Conviction) × 2.0 (Discovery) = 5.0×


On a 90-day narrative with 10 SOL committed at 7.2% annualized yield:


yield = 10 SOL × 7.2% × (90/365) × 5.0 = 0.89 SOL


This represents an 8.9% return in 90 days — approximately 36% annualized — for a consistently accurate early believer. This is the product's compelling case: accurate prediction, expressed early, earns returns that rival active trading strategies.


## 5.3 Streak Multiplier


A third multiplier rewards consistent participation over consecutive epochs (30-day periods):

- 2 consecutive epochs with correct backing: 1.05× streak multiplier
- 3 epochs: 1.10×
- 6 epochs: 1.20×
- 12+ epochs: 1.35×

The streak resets if a participant has no correct backing in an epoch. This rewards sustained engagement and penalizes periodic speculation. A participant maintaining a 12-month streak earns the 1.35× streak multiplier on top of their Conviction and Discovery multipliers.
