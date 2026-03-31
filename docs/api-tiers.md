---
id: api-tiers
title: API Tiers & Pricing
sidebar_position: 14
---

# API Tiers & Pricing

MAGMA Protocol offers tiered API access for developers, AI agents, and enterprise integrations.

:::note
Paid tier upgrades and billing are not yet active. All API keys are currently on the Free tier. Paid tiers will activate post-TGE.
:::

## Tier Comparison

| Feature | Free | Pro | Enterprise |
| --- | --- | --- | --- |
| Requests per minute | 60 | 300 | 1,000 |
| Narrative feed access | ✅ | ✅ | ✅ |
| Conviction score reads | ✅ | ✅ | ✅ |
| System status | ✅ | ✅ | ✅ |
| Points leaderboard | ✅ | ✅ | ✅ |
| Programmatic backing | ❌ | ✅ | ✅ |
| Programmatic submission | ❌ | ✅ | ✅ |
| Webhook subscriptions | ❌ | ✅ | ✅ |
| WebSocket feed | ❌ | ❌ | ✅ |
| Dedicated support | ❌ | ❌ | ✅ |
| Price | Free | TBD post-TGE | TBD post-TGE |

## Getting an API Key

API keys are currently issued manually during beta. Contact the MAGMA team via Discord or email to request access.

Once issued, your key will be in the format:
```
mgma_<4hex>_<64hex>
```

Store it securely — it is shown only once at creation.

## Using Your API Key

Pass your key in the `x-api-key` header on all requests:
```bash
curl -H 'x-api-key: mgma_abcd1234_...' \
  'https://magma-backend-production-9f5b.up.railway.app/v1/narratives'
```

## Rate Limit Response

When you exceed your tier's rate limit you will receive:
```json
{
  "error": "Rate limit exceeded",
  "tier": "free",
  "limit": 60,
  "retry_after": "60s"
}
```

## Key Management

List your keys:
```bash
GET /v1/apikeys/{wallet_address}
```

Revoke a key:
```bash
POST /v1/apikeys/revoke
Body: { "id": "key-uuid", "wallet_address": "your-wallet" }
```

## Upgrading Your Tier

Tier upgrades will be available post-TGE via the MAGMA dashboard. Pricing will be announced closer to TGE.