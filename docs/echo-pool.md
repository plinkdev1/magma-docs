---
id: echo-pool
title: The Echo Pool
sidebar_position: 6
---

# The Echo Pool


## 6.1 Mechanism


When a narrative resolves FALSE, 35% of the incorrect participants' capital flows into the Echo Pool rather than the protocol treasury. At the end of each 30-day epoch, the accumulated Echo Pool is distributed proportionally to all wallets that correctly backed narratives during that epoch.


Distribution weight for wallet wᵢ in epoch e:


weight(wᵢ, e) = correct_backings(wᵢ, e) × avg_conviction_score(wᵢ) × total_sol_backed_correctly(wᵢ, e)


echo_share(wᵢ, e) = weight(wᵢ, e) / Σ weight(wⱼ, e)  ×  echo_pool(e)


In plain terms: at the end of every month, a fraction of all the capital lost by wrong participants is distributed to everyone who was right that month, weighted by how much they backed correctly and how proven their accuracy is. The better a participant's track record and the larger their positions, the larger their share.


## 6.2 Why This Matters


The Echo Pool transforms MAGMA from a zero-sum prediction market into a positive-sum conviction community. In a conventional prediction market, correct participants only benefit from the specific narratives they backed. In MAGMA, correct participants benefit from every incorrect participant in the ecosystem each month, regardless of which specific narratives each party participated in.


This creates a powerful incentive structure: the more incorrect participants there are in total, the larger the Echo Pool, and the more correct participants earn. Protocol growth directly benefits existing accurate participants. The community of correct believers is, in a literal financial sense, funded by the community of wrong ones.


## 6.3 Activation Requirement


The Echo Pool activates only after the oracle achieves ≥85% accuracy on a minimum of 50 resolved narratives. This prevents a systematic oracle bias from misallocating capital. An oracle that resolves incorrectly more than 15% of the time would redistribute capital from correct participants to incorrect ones — the opposite of the intended effect. The activation threshold ensures the redistribution mechanism operates on a proven foundation.
