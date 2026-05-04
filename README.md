# RAK A VAN — Next.js Website
### Built on the Conicorn template aesthetic

**White/light theme · DM Serif Display headings · DM Sans body · Orange CTA accent · Conicorn-style numbered sections**

---

## Quick Start

```bash
tar -xzf rakavan-nextjs.tar.gz
cd rakavan
npm install
npm run dev
# → http://localhost:3000
```

---

## Design System

| Token | Value |
|---|---|
| **Background** | `#FFFFFF` (white) |
| **Surface** | `#F8F7F4` (warm off-white, alternating sections) |
| **Border** | `#E8E6E1` |
| **Text** | `#0D0D0D` |
| **Muted text** | `#6B6860` |
| **Accent (CTA)** | `#E8540A` (RAK A VAN orange) |
| **Heading font** | DM Serif Display |
| **Body font** | DM Sans |

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage (Hero → About → Values → Products → Process → Case Studies → Testimonials → FAQ → Contact) |
| `/shop` | Product categories |
| `/about` | Company story + timeline |
| `/contact` | Contact form + details |
| `/distributors` | Distributor network |

---

## Chatbot Integration

The layout already has a `<div id="chatbot-root" />` at the bottom of `app/layout.tsx`.

To add a chatbot later:
1. Install your chatbot SDK
2. Create `components/Chatbot.tsx` as a `'use client'` component
3. Import into `app/layout.tsx`:

```tsx
import ChatbotWidget from '@/components/Chatbot'
// ...
<div id="chatbot-root" />
<ChatbotWidget />
```

Popular options: Intercom, Crisp, Tidio, or a custom Claude-powered bot.

---

## Deployment (Vercel)

```bash
npx vercel
```

Or push to GitHub and connect to Vercel for automatic deploys.
