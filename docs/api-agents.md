---
id: api-agents
title: AI Agents API
sidebar_position: 13
---

# AI Agents API

MAGMA Protocol exposes a set of public API endpoints designed for AI agents, trading bots, and automated systems to interact with the protocol programmatically.

:::caution
The AI Agents API is in active development. Endpoints and parameters may change. Always check this page for the latest version.
:::

## Base URL

```
https://api.magmaprotocol.xyz
```

## Authentication

Public read endpoints require no authentication. Write endpoints (backing, submitting narratives) require a valid Solana wallet signature. API key authentication is coming in a future release.

## Narrative Feed

### GET /v1/narratives

Returns the narrative feed. Supports filtering.

**Query parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| filter | string | `all` \| `new` \| `trending` \| `backed` |
| wallet | string | Required when filter=backed. Returns narratives backed by this wallet. |

**Example:**
```bash
curl 'https://api.magmaprotocol.xyz/v1/narratives?filter=trending'
```

**Response:**
```json
{
  "narratives": [
    {
      "id": "uuid",
      "title": "SOL will close above $250 on June 1",
      "category": "Market",
      "sol_backed": 142.5,
      "resolution_date": "2026-06-01T00:00:00Z",
      "status": "active"
    }
  ]
}
```

## Conviction Score

### GET /v1/conviction/:wallet

Returns the full conviction profile for a wallet.

**Example:**
```bash
curl 'https://api.magmaprotocol.xyz/v1/conviction/YOUR_WALLET_ADDRESS'
```

**Response:**
```json
{
  "conviction_score": 342,
  "conviction_tier": "magma",
  "yield_multiplier": 1.6,
  "correct_backings": 28,
  "incorrect_backings": 6,
  "accuracy_rate": 0.824,
  "current_streak": 5
}
```

## Echo Pool

### GET /v1/echo-pool/preview/:wallet

Returns the estimated Echo Pool distribution for a wallet at current epoch.

**Example:**
```bash
curl 'https://api.magmaprotocol.xyz/v1/echo-pool/preview/YOUR_WALLET'
```

## System Status

### GET /v1/system/status

Returns the current operational status of the protocol. Use this before submitting any transaction to verify the protocol is not halted.

**Example:**
```bash
curl 'https://api.magmaprotocol.xyz/v1/system/status'
```

**Response:**
```json
{
  "operational": true,
  "halted_components": [],
  "components": [
    { "component": "all", "is_halted": false },
    { "component": "submissions", "is_halted": false },
    { "component": "backing", "is_halted": false },
    { "component": "withdrawals", "is_halted": false },
    { "component": "oracle", "is_halted": false }
  ]
}
```

## Points

### GET /v1/points/:wallet

Returns total points and history for a wallet. Points are used for future community airdrop calculations.

**Response:**
```json
{
  "wallet_address": "...",
  "total_points": 450,
  "history": [
    { "points": 10, "reason": "correct_backing", "created_at": "2026-03-30T..." }
  ]
}
```

### GET /v1/points/leaderboard

Returns top 100 wallets by points.

## Terms Status

### GET /v1/terms/status/:wallet

Check if a wallet has accepted the current Terms of Service. Useful for agents that need to verify user eligibility before acting on their behalf.

**Response:**
```json
{
  "accepted": true,
  "latest": {
    "terms_version": "0.1",
    "accepted_at": "2026-03-30T...",
    "platform": "mobile_app"
  }
}
```

## Rate Limits

Public endpoints are rate limited to 100 requests per minute per IP address. If you exceed this limit you will receive a `429 Too Many Requests` response.

## Wallet Blocking Check
