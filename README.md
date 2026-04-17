# Hygraph Library

A book library site powered by [Hygraph](https://hygraph.com) as a headless CMS. Displays featured books on the homepage and individual book detail pages with edition variants.

## Tech Stack

- **Next.js 16** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS 4**
- **Hygraph** — GraphQL CMS for all book content
- **ISR** — on-demand revalidation via Hygraph webhooks

## Features

- Homepage with featured book sections
- Book detail pages (`/books/[slug]`) with editions (Hardcover, Paperback, Audiobook, etc.)
- Statically generated pages with `generateStaticParams`
- On-demand cache revalidation via `/api/revalidate`

## Getting Started

1. Copy `.env.local.example` to `.env.local` and add your Hygraph endpoint and token
2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```
HYGRAPH_ENDPOINT=       # Hygraph GraphQL API URL
HYGRAPH_TOKEN=          # Hygraph read token
REVALIDATION_TOKEN=     # Bearer token for /api/revalidate webhook
```

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Run ESLint
```
