# 3DC Brain — AI-Powered Revenue Operations for Real Estate Professionals

> Deploy AI agents that automate lead generation, competitive intelligence, and content creation in 30 days.

## About

**3DC Brain** is an informational SaaS website for real estate investors, coaches, and service providers ($200k+ annually). It showcases AI agents that handle:

- **Revenue Operations** — Lead generation, scoring, and pipeline management
- **Competitive Research** — Market intelligence and opportunity spotting
- **Content Engine** — Email, social, briefs, and sales collateral generation

Built with **Next.js 14+**, **TypeScript**, **Tailwind CSS**, and designed for **Vercel** hosting.

---

## Project Structure

```
3dc-brain/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Global layout
│   ├── page.tsx                 # Homepage
│   ├── how-it-works/            # How It Works page
│   ├── revenue-operations/      # Revenue Ops page
│   ├── competitive-research/    # Competitive Research page
│   ├── content-engine/          # Content Engine page
│   ├── for-investors/           # For Investors page
│   ├── for-coaches/             # For Coaches page
│   ├── for-service-providers/   # For Service Providers page
│   └── contact/                 # Contact page
├── components/                   # Reusable React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── FeatureCard.tsx          # Feature card
│   ├── CTA.tsx                  # Call-to-action section
│   ├── EmailForm.tsx            # Formspree email form
│   └── TestimonialBlock.tsx     # Testimonial component
├── public/                       # Static assets
├── styles/                       # Global styles (CSS)
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
└── README.md                     # This file
```

---

## Design System

**Colors:**
- Navy: `#0F1419` (primary dark)
- Charcoal: `#1A1F2E` (secondary dark)
- Cyan: `#00D4FF` (accent/primary)

**Typography:**
- Font Family: Inter
- Heading Scale: H1–H5
- Body Scale: LG, MD, SM, XS

**Spacing:**
- 8px baseline grid
- Tokens: xs (0.5rem), sm (1rem), md (1.5rem), lg (2rem), xl (3rem)

---

## Setup & Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/go3dc/3dc-brain.git
cd 3dc-brain
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Formspree form ID:
   - Go to [formspree.io](https://formspree.io)
   - Sign up (free)
   - Create a new form
   - Copy the form ID
   - Paste it in `.env.local`:
     ```
     NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
     ```

---

## Development

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## Pages & Routes

| Route | Title | Description |
|-------|-------|-------------|
| `/` | Homepage | Hero + pain/solution sections + CTA |
| `/how-it-works` | How It Works | 3-phase process (Strategy → Deploy → Scale) |
| `/revenue-operations` | Revenue Ops | Lead gen, scoring, pipeline management |
| `/competitive-research` | Competitive Research | Market intelligence & opportunity spotting |
| `/content-engine` | Content Engine | Email, social, briefs, collateral generation |
| `/for-investors` | For Investors | Investor-specific features & results |
| `/for-coaches` | For Coaches | Coach/consultant-specific features |
| `/for-service-providers` | For Service Providers | Service provider-specific features |
| `/contact` | Contact | Contact info + early access signup |

---

## Components

### Header
- Sticky navigation bar
- Logo/branding
- Links to all 10 pages
- Mobile-responsive hamburger menu
- CTA button (Early Access)

### Footer
- Company info
- Product links (Revenue Ops, Research, Content, How It Works)
- Resources links (For Investors, For Coaches, For Service Providers)
- Company links (Contact, Email)
- Copyright notice

### Hero
- Large headline
- Subheading
- Optional CTA button
- Optional gradient background
- Responsive typography

### FeatureCard
- Icon (emoji)
- Title
- Description
- Card styling with hover effects

### CTA
- Headline
- Subheading
- Embedded EmailForm component

### EmailForm
- Name input
- Email input
- Company input (optional)
- Role dropdown (Investor, Coach, Service Provider, Other)
- Submit button
- Success/error messages
- Formspree integration (no backend needed)

### TestimonialBlock
- Quote
- Author name
- Title/role

---

## Tailwind CSS Configuration

All design tokens are defined in `tailwind.config.ts`:

```typescript
colors: {
  navy: '#0F1419',
  charcoal: '#1A1F2E',
  cyan: '#00D4FF',
  // ...
}

fontSize: {
  h1, h2, h3, h4, h5,    // Heading scale
  'body-lg', 'body-md', 'body-sm', 'body-xs' // Body scale
}

spacing: {
  xs, sm, md, lg, xl, '2xl', '3xl' // 8px baseline grid
}
```

Reusable Tailwind components:
```css
.btn-primary     /* Cyan button */
.btn-secondary   /* Navy button */
.btn-outline     /* Outlined button */
.card            /* Card component */
.section         /* Full-width section padding */
.container-width /* Max-width container */
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub:
   ```bash
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Import the `3dc-brain` repository
4. Add environment variable:
   - Key: `NEXT_PUBLIC_FORMSPREE_ID`
   - Value: Your Formspree form ID
5. Deploy

### Other Platforms

This is a standard Next.js 14 app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted servers (with Node.js)

---

## Git Workflow

All commits follow this structure:

```bash
# After each major section:
git add .
git commit -m "feat: [feature description]"
git push origin main

# Example commits:
git commit -m "feat: scaffold Next.js project with TypeScript and Tailwind"
git commit -m "feat: add Header, Footer, and Hero components"
git commit -m "feat: create 10 page routes with placeholder content"
git commit -m "feat: add EmailForm component with Formspree integration"
git commit -m "docs: update README with setup and deployment instructions"
```

---

## Contributing

1. Clone the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "feat: description"`
4. Push branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

MIT License — See LICENSE file for details.

---

## Contact

- **Email:** leadership@go3dc.com
- **Website:** https://3dc-brain.com (coming soon)
- **Company:** 3 Degrees Consulting

---

## Roadmap

**Day 1 (Complete):** Design System & Copy
- Figma specs (colors, typography, components)
- Homepage copy & 8 page outlines

**Day 2 (Complete):** Scaffold & Setup
- GitHub repo created
- Next.js project scaffolded
- All 10 pages created with structure
- Components built (Header, Footer, Hero, CTA, EmailForm, etc.)
- Tailwind CSS configured with design tokens
- README & .env.example ready

**Day 3:** Design Integration
- Integrate Archibald's design system
- Implement color tokens & component styles
- Polish responsive design
- Add animations & transitions

**Day 4+:** Content Integration & Optimization
- Winston's copy integrated into all pages
- SEO optimization
- Performance optimization
- Analytics & tracking setup

---

**Built with ❤️ for the 3DC Brain team.**
