---
id: oracle-architecture
title: Oracle Architecture
sidebar_position: 7
---

# Oracle Architecture


## 7.1 The Resolution Problem


Automated resolution of real-world predictions is the hardest technical problem in this space. Existing approaches — decentralized dispute resolution, centralized human review, price feed oracles — each cover part of the problem space but none covers all of it. Price feeds resolve quantitative financial events precisely but cannot resolve legal rulings, sports outcomes, or cultural shifts. Human review introduces trusted parties. Decentralized dispute resolution is vulnerable to plutocratic coordination attacks.


MAGMA resolves narratives across three distinct categories, each requiring different evidential approaches:

- Empirical outcomes: determined by quantitative data — asset prices, on-chain metrics, statistical measures. Resolvable via price feed oracles and verifiable data sources.
- Evidential outcomes: determined by documented events — court rulings, electoral results, scientific publications. Require natural language processing of authoritative sources.
- Consensus outcomes: determined by collective social perception — cultural movements, ideological shifts, platform growth trajectories. Require aggregation of behavioral and sentiment signals.

## 7.2 Multi-Source Weighted Resolution


For each narrative category, MAGMA applies a weighted combination of data sources calibrated to that category's evidential requirements:

- Market: Pyth Network (30%), Grok AI (25%), Tavily search (25%), Ruma momentum (20%). GPT-4o tiebreaker.
- Sports: Odds API (50%), TheSports.com (30%), Grok AI (20%).
- Esports: PandaScore (60%), Grok AI (40%).
- Legal / Political / Scientific / Geopolitical: Grok AI (35–40%), Tavily search (30–35%), Perplexity (30–35%).
- Social / Cultural / Conviction: Ruma momentum (35–40%), Grok AI (30%), Community signal (30–35%). Consensus Oracle mode.

Resolution proceeds when the weighted signal combination exceeds a confidence threshold. When the threshold is not reached, the narrative enters the admin dispute escalation path.


## 7.3 Consensus Oracle Mode


For Social, Cultural, and Conviction categories, empirical resolution is insufficient. These narratives concern collective human perception, which cannot be definitively measured by any single data source. Consensus Oracle Mode aggregates four signal types:

- Momentum Signal: derived from Ruma API, measuring the velocity and direction of online engagement with the narrative's subject.
- Discourse Signal: derived from Grok AI analysis of public text, assessing the predominant framing of the claim in contemporary discussion.
- Community Signal: derived from on-chain data — the Conviction Score-weighted backing distribution across participants.
- Time Horizon Signal: validation of proxy metrics declared by the narrative creator at submission time.

Narratives submitted to Consensus Oracle Mode must include a Falsifiability Declaration (minimum 50 characters) specifying the conditions under which the claim would be false, and at least one measurable proxy metric. A Resolvability Score (0–100) is computed at submission; narratives scoring below 40 are rejected before entering the pool.


Resolution requires ≥75% weighted agreement across all four signals. Confidence between 50% and 75% triggers a Soft Resolution with a 96-hour challenge window. Irreconcilable signals escalate to admin review.


## 7.4 Admin Dispute Framework


Admin reviews follow a structured scorecard (0–100 total) with four parts: Empirical Verification (0–40), Narrative Interpretation (0–30), Oracle Signal Review (0–20), and Consensus Signal Review (0–10, applicable to consensus categories). Scores 75–100 permit single-admin resolution; 55–74 require two independent admins completing separate scorecards; 35–54 trigger deadline extension or refund; below 35 triggers automatic refund with no override possible.


All admin resolutions and their complete scorecards are permanently and publicly readable. Any participant may audit any resolution decision at any time. The scorecard must be completed before the resolution dropdown activates — admins cannot select an outcome and then construct justification.
