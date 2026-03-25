---
id: api-reference
title: API Reference
sidebar_position: 17
---

# API Reference

MAGMA Protocol exposes a REST API that allows developers to read protocol data, query oracle results, and integrate MAGMA into their own applications. A TypeScript SDK wraps these endpoints for easy use.

:::info
The public API is available on Solana Devnet now. Mainnet access requires an API key. See [Authentication](#authentication) below.
:::

## Base URL

```
https://api.magmaprotocol.xyz/v1
```

---

## Authentication

All write endpoints and mainnet read endpoints require an API key passed as a header:

```http
x-api-key: YOUR_API_KEY
```

To request an API key, contact [magma@exidante.xyz](mailto:magma@exidante.xyz).

**Rate limits:**

| Tier | Rate Limit | Endpoints |
|---|---|---|
| Free | 60 req/min | Read-only, devnet |
| Pro | 1,000 req/min | All read + webhooks |
| Enterprise | Unlimited | All endpoints + SLA |

---

## Narratives

### List Narratives

```http
GET /v1/narratives
```

Query parameters:

| Param | Type | Description |
|---|---|---|
| `status` | string | `active` \| `resolved` \| `pending` |
| `category` | string | Filter by category slug |
| `limit` | number | Max results (default 20, max 100) |
| `offset` | number | Pagination offset |

**Response:**

```json
{
  "data": [
    {
      "id": "nar_abc123",
      "title": "SOL will reach $300 by end of Q2 2026",
      "category": "market",
      "status": "active",
      "total_backed_usd": 12500.00,
      "backer_count": 47,
      "resolution_date": "2026-06-30T00:00:00Z",
      "created_at": "2026-03-01T12:00:00Z"
    }
  ],
  "total": 142,
  "limit": 20,
  "offset": 0
}
```

---

### Get Narrative

```http
GET /v1/narratives/:id
```

**Response:**

```json
{
  "id": "nar_abc123",
  "title": "SOL will reach $300 by end of Q2 2026",
  "category": "market",
  "status": "active",
  "description": "...",
  "total_backed_usd": 12500.00,
  "backer_count": 47,
  "true_pool_usd": 8200.00,
  "false_pool_usd": 4300.00,
  "resolution_date": "2026-06-30T00:00:00Z",
  "oracle_result": null,
  "resolvability_score": 94,
  "created_at": "2026-03-01T12:00:00Z"
}
```

---

## Oracle

### Get Oracle Result

```http
GET /v1/oracle/:narrativeId
```

**Response:**

```json
{
  "narrative_id": "nar_abc123",
  "result": "TRUE",
  "confidence": 0.91,
  "sources": [
    { "name": "CoinGecko", "weight": 0.25, "value": "TRUE" },
    { "name": "Pyth",      "weight": 0.25, "value": "TRUE" },
    { "name": "Chainlink", "weight": 0.20, "value": "TRUE" },
    { "name": "CoinMarketCap", "weight": 0.15, "value": "TRUE" },
    { "name": "Birdeye",   "weight": 0.15, "value": "FALSE" }
  ],
  "resolved_at": "2026-06-30T18:00:00Z"
}
```

---

## Conviction Scores

### Get Conviction Score

```http
GET /v1/conviction/:walletAddress
```

**Response:**

```json
{
  "wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "score": 342,
  "tier": "magma",
  "multiplier": 1.6,
  "total_backings": 28,
  "correct_backings": 19,
  "accuracy_rate": 0.679,
  "streak": 4,
  "last_updated": "2026-03-20T10:00:00Z"
}
```

---

## Portfolio

### Get Wallet Portfolio

```http
GET /v1/portfolio/:walletAddress
```

**Response:**

```json
{
  "wallet": "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
  "total_backed_usd": 4250.00,
  "active_positions": 6,
  "total_yield_earned_usd": 187.50,
  "positions": [
    {
      "narrative_id": "nar_abc123",
      "narrative_title": "SOL will reach $300...",
      "side": "TRUE",
      "amount_usd": 500.00,
      "current_yield_usd": 12.40,
      "status": "active",
      "backed_at": "2026-03-10T14:00:00Z"
    }
  ]
}
```

---

## Protocol Stats

### Get Protocol Stats

```http
GET /v1/stats
```

**Response:**

```json
{
  "total_tvl_usd": 284500.00,
  "active_narratives": 47,
  "resolved_narratives": 312,
  "total_backers": 1840,
  "total_yield_distributed_usd": 18200.00,
  "oracle_accuracy_rate": 0.887,
  "epoch_start": "2026-01-01T00:00:00Z"
}
```

---

## Echo Pool

### Get Echo Pool State

```http
GET /v1/echo-pool
```

**Response:**

```json
{
  "current_pool_usd": 4200.00,
  "next_distribution_date": "2026-04-01T00:00:00Z",
  "last_distribution_usd": 3800.00,
  "last_distribution_date": "2026-03-01T00:00:00Z",
  "eligible_backers": 284
}
```

---

## TypeScript SDK

Install the MAGMA SDK:

```bash
npm install @magma-protocol/sdk
```

### Usage

```typescript
import { MagmaClient } from '@magma-protocol/sdk'

const client = new MagmaClient({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet', // or 'devnet'
})

// Get active narratives
const narratives = await client.narratives.list({ status: 'active' })

// Get conviction score
const score = await client.conviction.get('7xKXtg2...')

// Get oracle result
const result = await client.oracle.getResult('nar_abc123')

// Get protocol stats
const stats = await client.stats.get()
```

:::info SDK Status
The TypeScript SDK is planned for post-mainnet release. The REST API is available now on devnet.
:::

---

## Webhooks (Pro+)

Subscribe to real-time events:

```http
POST /v1/webhooks
```

```json
{
  "url": "https://your-app.com/webhook",
  "events": ["narrative.resolved", "oracle.result", "echo_pool.distributed"]
}
```

**Available events:**

| Event | Description |
|---|---|
| `narrative.created` | New narrative submitted |
| `narrative.resolved` | Oracle resolved a narrative |
| `oracle.result` | Oracle result published |
| `echo_pool.distributed` | Monthly Echo Pool distribution |
| `conviction.updated` | Wallet conviction score changed |

---

## Errors

All errors follow this format:

```json
{
  "error": "narrative_not_found",
  "message": "Narrative with ID nar_xyz does not exist",
  "status": 404
}
```

| Code | Meaning |
|---|---|
| 400 | Bad request / invalid params |
| 401 | Missing or invalid API key |
| 404 | Resource not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |
